pipeline {
    agent {
        // Need to be configured in node management
        node {
            label "master"
        }
    }
    tools {
        // Need to be configured in the global tool
        nodejs "node@14.21.3"
    }
    stages {
        stage("[ Pre-Build ]") {
            steps {
                println("\n")
                script {
                    try {

                        sh '''
                        echo $DOCKER_USERNAME
                        echo $DOCKER_REMOTE_URL
                        git -v
                        node -v
                        npm -v
                        yarn -v
                        npm config get registry
                        yarn config get registry
                        docker -v
                        docker ps -a
                        docker rmi -f $(docker images -q $DOCKER_USERNAME/$DOCKER_REGISTRY)
                        docker image ls -a

                        '''

                    } catch (Exception err) {
                        echo err.getMessage()
                        warnError(err.toString()) {
                            retry(3) {
                                echo "[ Please install required dependencies ]"
                            }
                        }
                        // currentBuild.result = "FAILURE"
                    }
                }
                println("\n")
            }
        }
        stage("[ Clone Code ]") {
            steps {
                println("\n")
                script {
                    try {

                        deleteDir()

                        // git branch: "${GIT_BRANCH}", credentialsId: "${GIT_CREDENTIALS_ID}", url: "${GIT_REPO}", changelog: true, poll: false

                        checkout([
                            $class: 'GitSCM',
                            branches: [[name: "${GIT_BRANCH}"]],
                            doGenerateSubmoduleConfigurations: false,
                            extensions: [],
                            submoduleCfg: [],
                            userRemoteConfigs: [[
                                credentialsId: "${GIT_CREDENTIALS_ID}",
                                url: "${GIT_REPO}"
                            ]]
                        ])

                    } catch (Exception err) {
                        echo err.getMessage()
                        warnError(err.toString()) {
                            retry(3) {
                                echo "[ Please check the identity information of git ]"
                            }
                        }
                        // currentBuild.result = "FAILURE"
                    }
                }
                println("\n")
            }
        }
        stage("[ Install Dependencies ]") {
            steps {
                println("\n")
                script {
                    try {

                        sh '''
                        # npm cache clean
                        # npm config set registry $NODE_DEPENDENCY_REGISTRY
                        # npm config get registry
                        # npm install
                        # npm run build
                        '''

                        sh '''
                        # yarn cache clean
                        yarn config set registry $NODE_DEPENDENCY_REGISTRY
                        yarn config get registry
                        yarn install
                        yarn build
                        '''

                    } catch(Exception err) {
                        echo err.getMessage()
                        warnError(err.toString()) {
                            retry(3) {
                                echo "[ Please check the npm or yarn version, etc. ]"
                            }
                        }
                        // currentBuild.result = "FAILURE"
                    }
                }
                println("\n")
            }
        }
        stage("[ Build ]") {
            steps {
                println("\n")
                script {

                    try {

                        env.COMMIT_ID = sh(returnStdout: true, script: "git log -n 1 --pretty=format:'%h'").trim()
                        env.TIME_STRAP = sh(returnStdout: true, script: 'date +%Y%m%d%H%M%S').trim()
                        env.DOCKER_TAG = "${GIT_BRANCH}_${TIME_STRAP}_${COMMIT_ID}_${BUILD_NUMBER}"

                        echo "COMMIT_ID: ${env.COMMIT_ID}"
                        echo "TIME_STRAP: ${env.TIME_STRAP}"
                        echo "DOCKER_TAG: ${env.DOCKER_TAG}"

                        sh '''
                        pwd
                        docker build -t $DOCKER_USERNAME/$DOCKER_REGISTRY:$DOCKER_TAG .
                        docker image ls -a
                        '''

                        DOCKER_TAG = env.DOCKER_TAG

                        // sh 'echo "$DOCKER_PASSWORD" | docker login $DOCKER_SERVER_URL -u $DOCKER_USERNAME --password-stdin'
                        // sh 'docker push $DOCKER_USERNAME/$DOCKER_REGISTRY:$DOCKER_TAG'

                    } catch(Exception err) {
                        echo err.getMessage()
                        warnError(err.toString()) {
                            retry(3) {
                                echo "[ Please check if docker is running ]"
                            }
                        }
                        // currentBuild.result = "FAILURE"
                    }
                }
                println("\n")
            }
        }
        stage("[ Publish ]") {
            steps {
                println("\n")
                script {
                    try {

                        echo "DOCKER_TAG: ${DOCKER_TAG}"

                        sh '''
                        echo "$DOCKER_PASSWORD" | docker login $DOCKER_SERVER_URL -u $DOCKER_USERNAME --password-stdin
                        docker push $DOCKER_USERNAME/$DOCKER_REGISTRY:$DOCKER_TAG
                        '''

                    } catch(Exception err) {
                        echo err.getMessage()
                        warnError(err.toString()) {
                            retry(3) {
                                echo "[ Please check the npm or yarn version, etc. ]"
                            }
                        }
                        // currentBuild.result = "FAILURE"
                    }
                }
                println("\n")
            }
        }
        stage("[ Deploy ]") {
            steps {
                println("\n")
                script {
                    try {

                        sh '''
                        docker -H $DOCKER_REMOTE_URL rm -f $APP_NAME
                        docker -H $DOCKER_REMOTE_URL image rm -f $DOCKER_USERNAME/$DOCKER_REGISTRY:$DOCKER_TAG
                        '''
                        sh '''
                        docker -H $DOCKER_REMOTE_URL run -itd \
                            --name $APP_NAME \
                            -p 60011:80 \
                            $DOCKER_USERNAME/$DOCKER_REGISTRY:$DOCKER_TAG
                        docker ps -a | grep "$APP_NAME"
                        '''

                    } catch(Exception err) {
                        echo err.getMessage()
                        warnError(err.toString()) {
                            retry(3) {
                                echo "[ Please check whether the remote docker service is turned on ]"
                            }
                        }
                        // currentBuild.result = "FAILURE"
                    }
                }
                println("\n")
            }
        }
    }
    environment {
        APP_NAME = "micro-service"

        GIT_REPO = "https://github.com/Alpha-CL/micro-service-main.git"
        GIT_BRANCH = "wujie-main"
        GIT_CREDENTIALS_ID = "79989a91-cc77-42e1-8b03-05000e8ef632"

        // Already configured on current node
        // DOCKER_USERNAME = ""
        // DOCKER_PASSWORD = ""
        // DOCKER_REMOTE_URL = ""
        DOCKER_SERVER_URL = "https://index.docker.io/v2/"
        DOCKER_REGISTRY = "micro-service"

        // NODE_DEPENDENCY_REGISTRY = "https://mirrors.cloud.tencent.com/npm/"        // 腾讯源
        // NODE_DEPENDENCY_REGISTRY = "https://registry.npm.taobao.org/"              // 淘宝源
        NODE_DEPENDENCY_REGISTRY = "https://registry.npm.alibaba-inc.com/"         // 阿里源
    }
}