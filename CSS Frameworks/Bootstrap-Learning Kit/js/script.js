iterateCodeExamples();

function iterateCodeExamples() {
  $(".code-example").each(function() {
    var code;
    var convertedCode;
    var $this = $(this);

    var toggleCode = '<button type="button" class="btn btn-link btn-sm code-toggle-button">Toggle code</button><div class="code-toggle"><div class="btn-group btn-group-sm codepen-button"><button type="button" class="btn btn-primary clipboard-button" data-custom-tooltip="Copied to clipboard"><img src="../img/clipboard.png">&nbsp;&nbsp;&nbsp;Copy to clipboard</button></div><pre><code class="html"></code></pre><div class="codepen" data-type="html"></div></div>';
    $this.append(toggleCode);

    // https://opticalcortex.com/auto-populating-codepre-tags-with-html-content-using-javascript/
    // Indentation = two spaces
    var sample_html = $(this).find(".code-live")[0].innerHTML;
    var white_space = "☺";
    try {
      white_space = sample_html.match(/\n+\s+\S/)[0].slice(0,(sample_html.match(/\n+\s+\S/)[0].length-1));
    } catch(err) {}
    var re = new RegExp(white_space,"g");
    sample_html = sample_html.replace(re,"\n").replace(/</g,"&lt;").replace(/>/g,"&gt;");
    sample_html = $.trim(sample_html);
    
    $this.find(".code-toggle pre code").html(sample_html);
    $this.find(".codepen").html(sample_html);
    
    highlightJS();
    clipboardJS();
    codeToggle($this);
    $this.find(".codepen").each(function() {
      codepenPrefill($(this), $this);
    });
    pageNavigation($this);
  });
};

function codepenPrefill(code, codeExample) {
  code.each(function() {

    var el = $(this),
        type = el.data("type"),
        HTML = "",
        CSS = "",
        JS = "",
        component = $('.component').text(),
        variation = codeExample.find('.component-variation').text(),
        codepenButton = codeExample.find('.codepen-button');

        HTML = "<!-- This code is dynamically created with the Learning Kit for the course 'Master Bootstrap 5' from Frontend Workshop. The course is available on frontendworkshop.com -->\n\n";
        CSS = "/* Basic demo styles */\nbody {\n\tpadding: 20px;\n}";
        JS = "";

        if (variation.length > 0) {
          variation = " – " + variation;
        }

        if (codeExample.data('css')) {
          CSS = CSS + '\n' + codeExample.data('css');
        }

        if (codeExample.data('js')) {
          JS = codeExample.data('js');
        }

      
    if (type == "html") {
        HTML = HTML + el.html();
        var imgStart = '../img/';
        var imgEnd = '.png';
        var imgSuccess = '1200x600-success';
        var imgDanger = '1200x600-danger';
        var imgWarning = '1200x600-warning';
        var imgInfo = '1200x600-info';
        var reStart = new RegExp(imgStart,"g");
        var reEnd = new RegExp(imgEnd,"g");
        var reSuccess = new RegExp(imgSuccess,"g");
        var reDanger = new RegExp(imgDanger,"g");
        var reWarning = new RegExp(imgWarning,"g");
        var reInfo = new RegExp(imgInfo,"g");
        HTML = HTML.replace(reStart, 'http://placehold.it/').replace(reEnd, '').replace(reSuccess, '/198754').replace(reDanger, '/dc3545').replace(reWarning, '/ffc107').replace(reInfo, '/0dcaf0');
    } else if (type == "css") {
        CSS = CSS + el.html();
    } else if (type == "js") {
        JS = JS + el.html();
    }

    var data = {
      title              : "Bootstrap 5: " + component + variation,
      description        : "Dynamically created CodePen from the online course 'Master Foundation 5' available on frontendworkshop.com",
      editors            : "100",
      html               : HTML,
      html_pre_processor : "none",
      css                : CSS,
      css_pre_processor  : "none",
      css_starter        : "neither",
      css_prefix_free    : false,
      js                 : JS,
      js_pre_processor   : "none",
      js_modernizr       : false,
      js_library         : "",
      html_classes       : "",
      css_external       : "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css",
      js_external        : "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js",
      template           : true
    };

    var JSONstring = 
      JSON.stringify(data)
      // Quotes will screw up the JSON
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

    var form = 
      '<form action="https://codepen.io/pen/define" method="POST" target="_blank">' + 
        '<input type="hidden" name="data" value=\'' + 
          JSONstring + 
          '\'>' + 
        '<button type="submit" class="btn btn-primary"><img src="../img/codepen.png">&nbsp;&nbsp;&nbsp;Open in CodePen</button>' +
      '</form>';

    codepenButton.append(form);

  });
}

function highlightJS() {
  document.querySelectorAll('.code-toggle pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
}

function clipboardJS() {
  var clipboard = new ClipboardJS('.clipboard-button', {
    target: function(trigger) {
      return trigger.closest('.btn-group').nextElementSibling;
    }
  });

  clipboard.on('success', function(e) {
    e.clearSelection();
    $(e.trigger).addClass('show-tooltip');
    window.setTimeout(function() {
        $(e.trigger).removeClass('show-tooltip');
    }, 2000);
  });
}

function codeToggle(codeExample) {
  var toggleButton = codeExample.find('.code-toggle-button');
  toggleButton.on('click', function() {
    codeExample.find('.code-toggle').slideToggle(250);
  })
}

function pageNavigation(codeExample) {
  var $pageNavigationList = $('#page-navigation');
  var componentVariation = codeExample.find('.component-variation');
  if (componentVariation.length == 0) {
    $pageNavigationList.parent('.card').remove();
    return;
  }
  componentVariationText = componentVariation.text();
  componentVariationId = componentVariation.text().replace(/\s+/g, '-').replace(/\(|\)/g, "_").replace(/[:]/g, '-').replace(/[0-9]/, 'x').toLowerCase();
  componentVariation.attr('id', componentVariationId);
  var listItem = '<a href="#' + componentVariationId + '" class="list-group-item list-group-item-action">' + componentVariationText + '</a>'
  $pageNavigationList.append(listItem);
  scrollSpy();
}

function activeMenuItem() {
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/')+1);
  $('a[href="' + filename + '"]').addClass('active');
  $('a[href="' + filename + '"]').closest('.nav-item').find('.nav-link').addClass('active');
}

function currentBreakpoint() {
  var breakpointMarkup = '<div class="card bg-light mb-3"><div class="card-body"><div class="btn-group btn-group-sm flex-wrap mb-3"><span class="pe-none btn btn-primary d-inline-block d-sm-none">XS</span><span class="pe-none btn btn-secondary d-none d-sm-inline-block">XS</span><span class="pe-none btn btn-primary d-none d-sm-inline-block d-md-none">SM</span><span class="pe-none btn btn-secondary d-sm-none d-md-inline-block">SM</span><span class="pe-none btn btn-primary d-none d-md-inline-block d-lg-none">MD</span><span class="pe-none btn btn-secondary d-md-none d-lg-inline-block">MD</span><span class="pe-none btn btn-primary d-none d-lg-inline-block d-xl-none">LG</span><span class="pe-none btn btn-secondary d-lg-none d-xl-inline-block">LG</span><span class="pe-none btn btn-primary d-none d-xl-inline-block d-xxl-none">XL</span><span class="pe-none btn btn-secondary d-xl-none d-xxl-inline-block">XL</span><span class="pe-none btn btn-primary d-none d-xxl-inline-block">XXL</span><span class="pe-none btn btn-secondary d-xxl-none">XXL</span></div><small class="d-block d-sm-none">Extra small: &lt;576px</small><small class="d-none d-sm-block d-md-none">Small: ≥576px</small><small class="d-none d-md-block d-lg-none">Medium: ≥768px</small><small class="d-none d-lg-block d-xl-none">Large: ≥992px</small><small class="d-none d-xl-block d-xxl-none">Extra large: ≥1200px</small><small class="d-none d-xxl-block">Extra extra large: ≥1400px</small></div></div></div>'
  $('.js-sidebar').prepend(breakpointMarkup);
}

function pageLoadAnimation() {
  $('main').addClass('loaded');
}

function scrollSpy() {
  $('body').css('position', 'relative');
  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#page-navigation'
  })
}

activeMenuItem();
currentBreakpoint();
pageLoadAnimation();

// TODO
// Custom styling for Layout elements should be added as data-css attributes for CodePen export
// JS error when only one .component-variation - maybe because of $(".code-example").each()
// Add close button to page navigation, so it can fx be closed for the layout elements (where it blocks much of the screen)
// Check handling of images on export to CodePen
// Change png icons for "Copy to clipboard" and "Open in CodePen" to inline SVG (fx from Font Awesome 5)
// Maybe: Remove jQuery reference from all HTML files and change this file to vanilla JS

// DATA-CSS
// 1) Convert indentation to tabs
// 2) Decrease indentation
// 3) Replace new lines
// 4) Replace tabs

// New line &#10;
// Tab &#9;
// Single quote &apos;
// Double quote &quot;