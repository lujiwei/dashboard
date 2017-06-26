// Copyright 2017 The Kubernetes Dashboard Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {SecretListController} from 'secret/list/controller';
import secretModule from 'secret/module';

describe('Secret list controller', () => {
  /** @type {!SecretListController} */
  let ctrl;

  beforeEach(() => {
    angular.mock.module(secretModule.name);

    angular.mock.inject(($controller) => {
      ctrl = $controller(SecretListController, {secretList: {secrets: []}});
    });
  });

  it('should initialize secret list', angular.mock.inject(($controller) => {
    let data = {secrets: []};
    /** @type {!SecretListController} */
    let ctrl = $controller(SecretListController, {secretList: data});

    expect(ctrl.secretList).toBe(data);
  }));

  it('should show zero state', () => {
    expect(ctrl.shouldShowZeroState()).toBeTruthy();
  });

  it('should hide zero state', () => {
    // given
    ctrl.secretList = {secrets: ['mock']};

    // then
    expect(ctrl.shouldShowZeroState()).toBeFalsy();
  });
});