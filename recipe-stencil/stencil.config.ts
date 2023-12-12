import { Config } from '@stencil/core';

import { ValueAccessorConfig, angularOutputTarget } from '@stencil/angular-output-target';

// props binding
const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'recipe-stencil',
  extras: {
    enableImportInjection: true,
  },
  outputTargets: [
    // By default, the generated proxy components will
    // leverage the output from the `dist` target, so we
    // need to explicitly define that output alongside the
    // Angular target
    {
      type: 'dist',
    },
    angularOutputTarget({
      componentCorePackage: '@recipe-stencil/src',
      directivesProxyFile: './../recipe-front-angular/src/libs/stencil-generated/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
};
