import { createApp } from 'vue';
import './shared-styles.css';
import './workspace.css';
import type { MicroAppContext, MicroAppHandle } from './types';
import App from './App.vue';

export function mount(container: HTMLElement, context: MicroAppContext): MicroAppHandle {
  const app = createApp(App, { context });
  app.mount(container);
  return {
    unmount() {
      app.unmount();
      container.innerHTML = '';
    }
  };
}
