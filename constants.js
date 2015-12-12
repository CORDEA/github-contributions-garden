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

constants.red_key = "storage_red";

constants.green_key = "storage_green";

constants.blue_key = "storage_blue";

constants.getDefaultColor = function() {
    var get = {};
    get[constants.red_key] = 17;
    get[constants.green_key] = 85;
    get[constants.blue_key] = 204;
    
    return get;
}
