function dropdown(selector, buttonSelector) {
    const select = document.querySelector(selector);
    const button = document.querySelector(buttonSelector);
    const childnodes = document.querySelectorAll(`${selector} > *`);
  
    select.style.position = 'absolute';
    select.style.backgroundColor = 'white';
    select.style.border = '1px solid #ccc';
    select.style.borderRadius = '4px';
    select.style.padding = '4px 0';
    select.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    select.style.zIndex = '1000';
  
    childnodes.forEach(node => {
      node.style.padding = '8px 12px';
      node.style.cursor = 'pointer';
      node.style.whiteSpace = 'nowrap';
      node.style.textAlign = 'center';
  
      node.addEventListener('mouseenter', () => {
        node.style.backgroundColor = '#f0f0f0';
      });
  
      node.addEventListener('mouseleave', () => {
        node.style.backgroundColor = '';
      });
    });
  
    button.style.position = 'relative';
    button.style.padding = '8px 12px';
    button.style.cursor = 'pointer';
    button.style.border = '1px solid #ccc';
    button.style.borderRadius = '4px';
    button.style.backgroundColor = '#eee';
  
    select.style.width = button.offsetWidth + 'px';
    select.style.display = 'none';
  
    let initState = true;
    button.addEventListener('click', () => {
      initState = (initState === true) ? false : true;
      if (initState === false) {
        select.style.display = 'flex';
        select.style.flexDirection = 'column';
      } else {
        select.style.display = 'none';
      }
    });
  }
  
dropdown('.visible', '.dropdown');