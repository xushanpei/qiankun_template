
const loader = (loading: boolean) => {
  // 此处可以获取子应用是否加载成功,可以用来触发全局的loading
  console.log('loading', loading);
};

export const Microconfig = [
  {
    name: 'vue2',
    entry: 'http://localhost:8001',
    container: '#subContainer',
    activeRule: '/vue2',
    loader,
  },
  {
    name: 'vue3',
    entry: 'http://localhost:8002',
    container: '#subContainer',
    activeRule: '/vue3',
    loader,
  },
  {
    name: 'react',
    entry: 'http://localhost:8003',
    container: '#subContainer',
    activeRule: '/react',
    loader,
  },
  {
    name: 'umi',
    entry: 'http://localhost:8004',
    container: '#subContainer',
    activeRule: '/umi',
    loader,
  },
  {
    name: 'purehtml',
    entry: 'http://127.0.0.1:8005',
    container: '#subContainer',
    activeRule: '/purehtml',
    loader,
  },
  //angular
  {
    name: 'angular',
    entry: 'http://127.0.0.1:8006',
    container: '#subContainer',
    activeRule: '/angular',
    loader,
  },
];
