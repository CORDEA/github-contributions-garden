/**
 *
 * Copyright [2015] [Yoshihiro Tanaka]
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Author: Yoshihiro Tanaka <contact@cordea.jp>
 * date  : 2015-12-12
 */

var constants = {};

constants.GITHUB_PROFILE_URL = "^https://github.com/\\w+$";

constants.RED_KEY = "storage_red";

constants.GREEN_KEY = "storage_green";

constants.BLUE_KEY = "storage_blue";

constants.getDefaultColor = function() {
    var get = {};
    get[constants.RED_KEY] = 17;
    get[constants.GREEN_KEY] = 85;
    get[constants.BLUE_KEY] = 204;
    
    return get;
}
