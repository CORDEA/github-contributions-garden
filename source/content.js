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
 * date  : 2015-11-26
 */

var content = {};

content.listenRequests_ = function () {
    chrome.runtime.onMessage.addListener( function(request, sender) {
        switch (request.method) {
            case 'background.validUrl':
                content.initialize_();
                break;
        }
    });
}

content.getLegend_ = function() {
    var container = document.getElementById("contributions-calendar");
    var legout = container.getElementsByClassName("contrib-legend")[0];
    var legend = legout.getElementsByClassName("legend")[0];
    var colors = legend.getElementsByTagName("li");
    return colors;
}

content.checkColor_ = function() {
    var bases = [];
    var regex = new RegExp("#[A-Za-z0-9]{3,6}");
    var colors = content.getLegend_();
    for (var i = 0; i < colors.length; i++) {
        var colstyle = colors[i].getAttribute("style");
        bases.push(regex.exec(colstyle));
    }
    return bases;
}

content.changeLegendColor_ = function(grads) {
    var colors = content.getLegend_();
    for (var i = 0; i < colors.length; i++) {
        if (i !== 0) {
            colors[i].setAttribute("style", "background-color: " + grads[i]);
        }
    }
}

content.searchHtml_ = function(bases, grads) {
    var container = document.getElementById("contributions-calendar");
    var graph = container.getElementsByClassName("js-calendar-graph")[0];
    var svgout = graph.getElementsByClassName("js-calendar-graph-svg")[0];
    var svg = svgout.getElementsByTagName("g")[0];

    var gels = svg.getElementsByTagName("g");
    for (var j = 0; j < gels.length; j++) {
        var rects = gels[j].getElementsByClassName("day");
        for (var i = 0; i < rects.length; i++) {
            var col = rects[i].getAttribute("fill");
            if (col !== "#eeeeee") {
                var idx = content.arrayIndexOf_(col, bases);
                if (idx !== -1) {
                    rects[i].setAttribute("fill", grads[idx]);
                }
            }
        }
    }
}

content.initialize_ = function () {
    var bases = content.checkColor_();
    var c = constants;

    chrome.storage.sync.get(c.getDefaultColor()
            , function(items) {
                var grads = colutil.getGithubGradation(new colutil.rgb(
                            items[c.RED_KEY],
                            items[c.GREEN_KEY],
                            items[c.BLUE_KEY]
                            ));
                content.changeLegendColor_(grads);
                content.searchHtml_(bases, grads);
            });
}

content.arrayIndexOf_ = function (value, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === null) {
            return -1;
        }
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
}

content.listenRequests_();
