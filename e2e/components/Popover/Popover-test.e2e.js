/**
 * Copyright IBM Corp. 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { test, expect } = require('@playwright/test');
const { themes } = require('../../test-utils/env');
const { snapshot } = require('../../test-utils/snapshot');
const { snapshotStory, visitStory } = require('../../test-utils/storybook');

test.describe('Popover', () => {
  themes.forEach((theme) => {
    test.describe(theme, () => {
      test('Popover @vrt', async ({ page }) => {
        await snapshotStory(page, {
          component: 'Popover',
          id: 'components-popover--default',
          theme,
        });
      });

      test('Popover - isTabTip @vrt', async ({ page }) => {
        await snapshotStory(page, {
          component: 'Popover',
          id: 'components-popover--tab-tip',
          theme,
        });
      });
    });
  });
});
