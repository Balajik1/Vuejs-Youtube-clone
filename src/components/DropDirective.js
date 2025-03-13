const dropDirective = {
    inserted(el, binding) {
      el.addEventListener('dragover', (e) => {
        e.preventDefault();
      });
  
      el.addEventListener('drop', (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        const obj = JSON.parse(data);
        binding.value(obj);
      });
    },
  };
  
  export default dropDirective;