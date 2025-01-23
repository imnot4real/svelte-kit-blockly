import App from './App.svelte';

// Inject remaining CSS into the document
const style = document.createElement('style');
style.textContent = `
  body {
    margin: 0;
    max-width: 100vw;
  }
  
  pre,
  code {
    overflow: auto;
  }
`;
document.head.appendChild(style);

const app = new App({
  target: document.body,
});

export default app;
