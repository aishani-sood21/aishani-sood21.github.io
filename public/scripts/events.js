// Function to log events with timestamp, type, and target element
function logEvent(eventType, target) {
    const timestamp = new Date().toISOString();
    const tagName = target.tagName.toLowerCase();
    const classList = target.className ? `.${target.className.replace(/\s+/g, '.')}` : '';
    const id = target.id ? `#${target.id}` : '';
    const elementDescriptor = `${tagName}${id}${classList}`;
  
    console.log(`${timestamp}, ${eventType}, ${elementDescriptor}`);
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
    logEvent('view', document.body);
  });
  

  document.addEventListener('click', (event) => {
    logEvent('click', event.target);
  });
  