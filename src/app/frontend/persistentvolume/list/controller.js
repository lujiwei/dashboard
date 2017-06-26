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

/**
 * Controller for the persistent volume list view.
 *
 * @final
 */
export class PersistentVolumeListController {
  /**
   * @param {!backendApi.PersistentVolumeList} persistentVolumeList
   * @param {!angular.Resource}kdPersistentVolumeListResource
   * @ngInject
   */
  constructor(persistentVolumeList, kdPersistentVolumeListResource) {
    /** @export {!backendApi.PersistentVolumeList} */
    this.persistentVolumeList = persistentVolumeList;

    /** @export {!angular.Resource} */
    this.persistentVolumeListResource = kdPersistentVolumeListResource;
  }

  /**
   * @return {boolean}
   * @export
   */
  shouldShowZeroState() {
    return this.persistentVolumeList.items.length === 0;
  }
}