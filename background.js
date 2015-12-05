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
 * date  : 2015-12-04
 */

var constants = {};

constants.GITHUB_PROFILE_URL = "^https://github.com/\\w+$";

var background = {};

background.checkForValidUrl_ = function () {
    chrome.tabs.onUpdated.addListener( function(tabId, changeInfo, tab) {
        var regex = new RegExp(constants.GITHUB_PROFILE_URL);
        if (regex.test(tab.url)) {
            chrome.tabs.sendMessage(tab.id, {method: "background.validUrl"});
        }
    });
}

background.checkForValidUrl_();
