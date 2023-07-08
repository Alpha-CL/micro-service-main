import { useState } from 'react';

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);

  // 在这里实现您的登录逻辑

  return { isLogin };
};

export default useAuth;
