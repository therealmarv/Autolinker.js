Ext.data.JsonP.Autolinker_htmlParser_HtmlNode({"tagname":"class","name":"Autolinker.htmlParser.HtmlNode","autodetected":{},"files":[{"filename":"HtmlNode.js","href":"HtmlNode.html#Autolinker-htmlParser-HtmlNode"}],"abstract":true,"members":[{"name":"text","tagname":"cfg","owner":"Autolinker.htmlParser.HtmlNode","id":"cfg-text","meta":{"required":true}},{"name":"constructor","tagname":"method","owner":"Autolinker.htmlParser.HtmlNode","id":"method-constructor","meta":{}},{"name":"getText","tagname":"method","owner":"Autolinker.htmlParser.HtmlNode","id":"method-getText","meta":{}},{"name":"getType","tagname":"method","owner":"Autolinker.htmlParser.HtmlNode","id":"method-getType","meta":{"abstract":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Autolinker.htmlParser.HtmlNode","short_doc":"Represents an HTML node found in an input string. ...","component":false,"superclasses":[],"subclasses":["Autolinker.htmlParser.CommentNode","Autolinker.htmlParser.ElementNode","Autolinker.htmlParser.EntityNode","Autolinker.htmlParser.TextNode"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Autolinker.htmlParser.CommentNode' rel='Autolinker.htmlParser.CommentNode' class='docClass'>Autolinker.htmlParser.CommentNode</a></div><div class='dependency'><a href='#!/api/Autolinker.htmlParser.ElementNode' rel='Autolinker.htmlParser.ElementNode' class='docClass'>Autolinker.htmlParser.ElementNode</a></div><div class='dependency'><a href='#!/api/Autolinker.htmlParser.EntityNode' rel='Autolinker.htmlParser.EntityNode' class='docClass'>Autolinker.htmlParser.EntityNode</a></div><div class='dependency'><a href='#!/api/Autolinker.htmlParser.TextNode' rel='Autolinker.htmlParser.TextNode' class='docClass'>Autolinker.htmlParser.TextNode</a></div><h4>Files</h4><div class='dependency'><a href='source/HtmlNode.html#Autolinker-htmlParser-HtmlNode' target='_blank'>HtmlNode.js</a></div></pre><div class='doc-contents'><p>Represents an HTML node found in an input string. An HTML node is one of the following:</p>\n\n<ol>\n<li>An <a href=\"#!/api/Autolinker.htmlParser.ElementNode\" rel=\"Autolinker.htmlParser.ElementNode\" class=\"docClass\">ElementNode</a>, which represents HTML tags.</li>\n<li>A <a href=\"#!/api/Autolinker.htmlParser.TextNode\" rel=\"Autolinker.htmlParser.TextNode\" class=\"docClass\">TextNode</a>, which represents text outside or within HTML tags.</li>\n<li>A <a href=\"#!/api/Autolinker.htmlParser.EntityNode\" rel=\"Autolinker.htmlParser.EntityNode\" class=\"docClass\">EntityNode</a>, which represents one of the known HTML\nentities that Autolinker looks for. This includes common ones such as &amp;quot; and &amp;nbsp;</li>\n</ol>\n\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required config options</h3><div id='cfg-text' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.htmlParser.HtmlNode'>Autolinker.htmlParser.HtmlNode</span><br/><a href='source/HtmlNode.html#Autolinker-htmlParser-HtmlNode-cfg-text' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.htmlParser.HtmlNode-cfg-text' class='name expandable'>text</a> : String<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'>The original text that was matched for the HtmlNode. ...</div><div class='long'><p>The original text that was matched for the HtmlNode.</p>\n\n<ul>\n<li>In the case of an <a href=\"#!/api/Autolinker.htmlParser.ElementNode\" rel=\"Autolinker.htmlParser.ElementNode\" class=\"docClass\">ElementNode</a>, this will be the tag's\ntext.</li>\n<li>In the case of a <a href=\"#!/api/Autolinker.htmlParser.TextNode\" rel=\"Autolinker.htmlParser.TextNode\" class=\"docClass\">TextNode</a>, this will be the text itself.</li>\n<li>In the case of a <a href=\"#!/api/Autolinker.htmlParser.EntityNode\" rel=\"Autolinker.htmlParser.EntityNode\" class=\"docClass\">EntityNode</a>, this will be the text of\nthe HTML entity.</li>\n</ul>\n\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.htmlParser.HtmlNode'>Autolinker.htmlParser.HtmlNode</span><br/><a href='source/HtmlNode.html#Autolinker-htmlParser-HtmlNode-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Autolinker.htmlParser.HtmlNode-method-constructor' class='name expandable'>Autolinker.htmlParser.HtmlNode</a>( <span class='pre'>cfg</span> ) : <a href=\"#!/api/Autolinker.htmlParser.HtmlNode\" rel=\"Autolinker.htmlParser.HtmlNode\" class=\"docClass\">Autolinker.htmlParser.HtmlNode</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Object<div class='sub-desc'><p>The configuration properties for the Match instance, specified in an Object (map).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.htmlParser.HtmlNode\" rel=\"Autolinker.htmlParser.HtmlNode\" class=\"docClass\">Autolinker.htmlParser.HtmlNode</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.htmlParser.HtmlNode'>Autolinker.htmlParser.HtmlNode</span><br/><a href='source/HtmlNode.html#Autolinker-htmlParser-HtmlNode-method-getText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.htmlParser.HtmlNode-method-getText' class='name expandable'>getText</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves the text for the HtmlNode. ...</div><div class='long'><p>Retrieves the <a href=\"#!/api/Autolinker.htmlParser.HtmlNode-cfg-text\" rel=\"Autolinker.htmlParser.HtmlNode-cfg-text\" class=\"docClass\">text</a> for the HtmlNode.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.htmlParser.HtmlNode'>Autolinker.htmlParser.HtmlNode</span><br/><a href='source/HtmlNode.html#Autolinker-htmlParser-HtmlNode-method-getType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.htmlParser.HtmlNode-method-getType' class='name expandable'>getType</a>( <span class='pre'></span> ) : String<span class=\"signature\"><span class='abstract' >abstract</span></span></div><div class='description'><div class='short'>Returns a string name for the type of node that this class represents. ...</div><div class='long'><p>Returns a string name for the type of node that this class represents.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"abstract":true}});