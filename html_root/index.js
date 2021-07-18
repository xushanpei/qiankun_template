const render = ($) => {
    // $('#test').html('Hello, render with jQuery');
    return Promise.resolve();
  };
  
  ((global) => {
    global['purehtml'] = {
      bootstrap: () => {
        console.log('purehtml bootstrap');
        return Promise.resolve();
      },
      mount: (props) => {
        console.log('purehtml mount00000000000',props);
        props.onGlobalStateChange((state,prev)=>{
          console.log(state,prev)
        })
        return render($);
      },
      unmount: () => {
        console.log('purehtml unmount');
        return Promise.resolve();
      },
    };
  })(window);