Ext.data.JsonP.Kort_controller_Main({"tagname":"class","name":"Kort.controller.Main","extends":"Ext.app.Controller","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Kort.controller.Main","code_type":"ext_define","members":{"cfg":[{"name":"control","tagname":"cfg","owner":"Kort.controller.Main","meta":{"private":true},"id":"cfg-control"},{"name":"refs","tagname":"cfg","owner":"Kort.controller.Main","meta":{"private":true},"id":"cfg-refs"},{"name":"routes","tagname":"cfg","owner":"Kort.controller.Main","meta":{"private":true},"id":"cfg-routes"},{"name":"views","tagname":"cfg","owner":"Kort.controller.Main","meta":{"private":true},"id":"cfg-views"}],"property":[],"method":[{"name":"getControl","tagname":"method","owner":"Kort.controller.Main","meta":{},"id":"method-getControl"},{"name":"getRefs","tagname":"method","owner":"Kort.controller.Main","meta":{},"id":"method-getRefs"},{"name":"getRoutes","tagname":"method","owner":"Kort.controller.Main","meta":{},"id":"method-getRoutes"},{"name":"getViews","tagname":"method","owner":"Kort.controller.Main","meta":{},"id":"method-getViews"},{"name":"onMainTabPanelActiveItemChange","tagname":"method","owner":"Kort.controller.Main","meta":{"private":true},"id":"method-onMainTabPanelActiveItemChange"},{"name":"setControl","tagname":"method","owner":"Kort.controller.Main","meta":{},"id":"method-setControl"},{"name":"setRefs","tagname":"method","owner":"Kort.controller.Main","meta":{},"id":"method-setRefs"},{"name":"setRoutes","tagname":"method","owner":"Kort.controller.Main","meta":{},"id":"method-setRoutes"},{"name":"setViews","tagname":"method","owner":"Kort.controller.Main","meta":{},"id":"method-setViews"},{"name":"showAbout","tagname":"method","owner":"Kort.controller.Main","meta":{},"id":"method-showAbout"},{"name":"showBugmap","tagname":"method","owner":"Kort.controller.Main","meta":{},"id":"method-showBugmap"},{"name":"showHighscore","tagname":"method","owner":"Kort.controller.Main","meta":{},"id":"method-showHighscore"},{"name":"showProfile","tagname":"method","owner":"Kort.controller.Main","meta":{},"id":"method-showProfile"},{"name":"showValidation","tagname":"method","owner":"Kort.controller.Main","meta":{},"id":"method-showValidation"},{"name":"showView","tagname":"method","owner":"Kort.controller.Main","meta":{"private":true},"id":"method-showView"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Main.js","href":"Main.html#Kort-controller-Main"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.app.Controller"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.app.Controller<div class='subclass '><strong>Kort.controller.Main</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Main.html#Kort-controller-Main' target='_blank'>Main.js</a></div></pre><div class='doc-contents'><p>Main controller for application</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-control' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Main'>Kort.controller.Main</span><br/><a href='source/Main.html#Kort-controller-Main-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Main-cfg-control' class='name expandable'>control</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{mainTabPanel: {activeitemchange: 'onMainTabPanelActiveItemChange'}}</code></p></div></div></div><div id='cfg-refs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Main'>Kort.controller.Main</span><br/><a href='source/Main.html#Kort-controller-Main-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Main-cfg-refs' class='name expandable'>refs</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{mainTabPanel: '#mainTabPanel', aboutContainer: '#aboutContainer', bugmapNavigationView: '#bugmapNavigationView', highscoreContainer: '#highscoreContainer', profileContainer: '#profileContainer', validationNavigationView: '#validationNavigationView'}</code></p></div></div></div><div id='cfg-routes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Main'>Kort.controller.Main</span><br/><a href='source/Main.html#Kort-controller-Main-cfg-routes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Main-cfg-routes' class='name expandable'>routes</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{'about': 'showAbout', 'bugmap': 'showBugmap', 'highscore': 'showHighscore', 'profile': 'showProfile', 'validation': 'showValidation'}</code></p></div></div></div><div id='cfg-views' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Main'>Kort.controller.Main</span><br/><a href='source/Main.html#Kort-controller-Main-cfg-views' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Main-cfg-views' class='name expandable'>views</a><span> : Array</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>['Main', 'NotificationMessageBox', 'LeafletMap']</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getControl' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Main'>Kort.controller.Main</span><br/><a href='source/Main.html#Kort-controller-Main-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Main-method-getControl' class='name expandable'>getControl</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of control. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.controller.Main-cfg-control\" rel=\"Kort.controller.Main-cfg-control\" class=\"docClass\">control</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRefs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Main'>Kort.controller.Main</span><br/><a href='source/Main.html#Kort-controller-Main-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Main-method-getRefs' class='name expandable'>getRefs</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of refs. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.controller.Main-cfg-refs\" rel=\"Kort.controller.Main-cfg-refs\" class=\"docClass\">refs</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRoutes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Main'>Kort.controller.Main</span><br/><a href='source/Main.html#Kort-controller-Main-cfg-routes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Main-method-getRoutes' class='name expandable'>getRoutes</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of routes. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.controller.Main-cfg-routes\" rel=\"Kort.controller.Main-cfg-routes\" class=\"docClass\">routes</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getViews' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Main'>Kort.controller.Main</span><br/><a href='source/Main.html#Kort-controller-Main-cfg-views' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Main-method-getViews' class='name expandable'>getViews</a>( <span class='pre'></span> ) : Array</div><div class='description'><div class='short'>Returns the value of views. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.controller.Main-cfg-views\" rel=\"Kort.controller.Main-cfg-views\" class=\"docClass\">views</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onMainTabPanelActiveItemChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Main'>Kort.controller.Main</span><br/><a href='source/Main.html#Kort-controller-Main-method-onMainTabPanelActiveItemChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Main-method-onMainTabPanelActiveItemChange' class='name expandable'>onMainTabPanelActiveItemChange</a>( <span class='pre'>container, newCmp, oldCmp, eOpts</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Called when active item of main tabpanel changes ...</div><div class='long'><p>Called when active item of main tabpanel changes</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>container</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>newCmp</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>oldCmp</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setControl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Main'>Kort.controller.Main</span><br/><a href='source/Main.html#Kort-controller-Main-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Main-method-setControl' class='name expandable'>setControl</a>( <span class='pre'>control</span> )</div><div class='description'><div class='short'>Sets the value of control. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.controller.Main-cfg-control\" rel=\"Kort.controller.Main-cfg-control\" class=\"docClass\">control</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>control</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setRefs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Main'>Kort.controller.Main</span><br/><a href='source/Main.html#Kort-controller-Main-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Main-method-setRefs' class='name expandable'>setRefs</a>( <span class='pre'>refs</span> )</div><div class='description'><div class='short'>Sets the value of refs. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.controller.Main-cfg-refs\" rel=\"Kort.controller.Main-cfg-refs\" class=\"docClass\">refs</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>refs</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setRoutes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Main'>Kort.controller.Main</span><br/><a href='source/Main.html#Kort-controller-Main-cfg-routes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Main-method-setRoutes' class='name expandable'>setRoutes</a>( <span class='pre'>routes</span> )</div><div class='description'><div class='short'>Sets the value of routes. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.controller.Main-cfg-routes\" rel=\"Kort.controller.Main-cfg-routes\" class=\"docClass\">routes</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>routes</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setViews' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Main'>Kort.controller.Main</span><br/><a href='source/Main.html#Kort-controller-Main-cfg-views' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Main-method-setViews' class='name expandable'>setViews</a>( <span class='pre'>views</span> )</div><div class='description'><div class='short'>Sets the value of views. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.controller.Main-cfg-views\" rel=\"Kort.controller.Main-cfg-views\" class=\"docClass\">views</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>views</span> : Array<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-showAbout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Main'>Kort.controller.Main</span><br/><a href='source/Main.html#Kort-controller-Main-method-showAbout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Main-method-showAbout' class='name expandable'>showAbout</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>redirects to about tab ...</div><div class='long'><p>redirects to about tab</p>\n</div></div></div><div id='method-showBugmap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Main'>Kort.controller.Main</span><br/><a href='source/Main.html#Kort-controller-Main-method-showBugmap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Main-method-showBugmap' class='name expandable'>showBugmap</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>redirects to bugmap tab ...</div><div class='long'><p>redirects to bugmap tab</p>\n</div></div></div><div id='method-showHighscore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Main'>Kort.controller.Main</span><br/><a href='source/Main.html#Kort-controller-Main-method-showHighscore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Main-method-showHighscore' class='name expandable'>showHighscore</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>redirects to highscore tab ...</div><div class='long'><p>redirects to highscore tab</p>\n</div></div></div><div id='method-showProfile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Main'>Kort.controller.Main</span><br/><a href='source/Main.html#Kort-controller-Main-method-showProfile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Main-method-showProfile' class='name expandable'>showProfile</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>redirects to profile tab ...</div><div class='long'><p>redirects to profile tab</p>\n</div></div></div><div id='method-showValidation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Main'>Kort.controller.Main</span><br/><a href='source/Main.html#Kort-controller-Main-method-showValidation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Main-method-showValidation' class='name expandable'>showValidation</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>redirects to validation tab ...</div><div class='long'><p>redirects to validation tab</p>\n</div></div></div><div id='method-showView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Main'>Kort.controller.Main</span><br/><a href='source/Main.html#Kort-controller-Main-method-showView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Main-method-showView' class='name expandable'>showView</a>( <span class='pre'>viewCmp</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>redirects to given component ...</div><div class='long'><p>redirects to given component</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>viewCmp</span> : Ext.Component<div class='sub-desc'><p>Component which should be displayed</p>\n</div></li></ul></div></div></div></div></div></div></div>"});