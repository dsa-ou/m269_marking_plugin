import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the m269_marking_plugin extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'm269_marking_plugin:plugin',
  description: 'Marking plugin for the M269 Open University module',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension m269_marking_plugin is activated!');
  }
};

export default plugin;
