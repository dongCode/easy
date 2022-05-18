const initMock = () => {
  const isMock = process.env.REACT_APP_ENV === 'MOCK';
  console.log(isMock, '启动Mock数据');
  if (isMock) {
    const { worker } = require('./browser');
    worker.start();
  }
};

export default initMock;
