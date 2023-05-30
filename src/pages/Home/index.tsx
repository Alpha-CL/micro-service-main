import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <iframe
          src="https://chat.openai.com/"
          style={{ width: '100vw', height: '100vh' }}
        />
      </div>
    </PageContainer>
  );
};

export default HomePage;
