if (!!!templates) var templates = {};
templates["greeting"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("Hello ");t.b(t.v(t.f("name",c,p,0)));return t.fl(); },partials: {}, subs: {  }});