import { Config } from '@stencil/core';
import {angularOutputTarget} from "@stencil/angular-output-target"

export const config: Config = {
  namespace: 'stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@workspace/stencil',
      directivesProxyFile: './../angular/projects/stencil-wrapper/src/lib/proxy.ts',
      directivesArrayFile: './../angular/projects/stencil-wrapper/src/lib/index.ts'
    })
  ],
};
