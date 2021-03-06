/**
 * QCObjects SDK 1.0
 * ________________
 *
 * Author: Jean Machuca <correojean@gmail.com>
 *
 * Cross Browser Javascript Framework for MVC Patterns
 * QuickCorp/QCObjects is licensed under the
 * GNU Lesser General Public License v3.0
 * [LICENSE] (https://github.com/QuickCorp/QCObjects/blob/master/LICENSE.txt)
 *
 * Permissions of this copyleft license are conditioned on making available
 * complete source code of licensed works and modifications under the same
 * license or the GNU GPLv3. Copyright and license notices must be preserved.
 * Contributors provide an express grant of patent rights. However, a larger
 * work using the licensed work through interfaces provided by the licensed
 * work may be distributed under different terms and without source code for
 * the larger work.
 *
 * Copyright (C) 2015 Jean Machuca,<correojean@gmail.com>
 *
 * Everyone is permitted to copy and distribute verbatim copies of this
 * license document, but changing it is not allowed.
*/
"use strict";
const version = "0.0.1";
const appName = "myapp";
const cacheSufix = (Math.round(Date.now()/(1000*3600))).toString(); // 1 hour
const cacheName = `qcobjects-app-${appName}-${version}-${cacheSufix}`;
const start_url = "/?homescreen=1";
caches.delete(cacheName); // force to reload cache for the first time the sw is loaded
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([`${start_url}`,
	"/",
	"app.js",
	"css\components\button.css",
	"css\components\card.css",
	"css\components\hero\hero-call-to-action.css",
	"css\components\hero\hero-overlay.css",
	"css\components\hero\hero-two-column-form.css",
	"css\components\modal.css",
	"css\desktop\container.css",
	"css\desktop\content.css",
	"css\desktop\footer.css",
	"css\desktop\index.css",
	"css\desktop\navbar.css",
	"css\desktop\sidebar.css",
	"css\index.css",
	"css\mobile\content.css",
	"css\mobile\footer.css",
	"css\mobile\index.css",
	"css\mobile\navbar.css",
	"css\mobile\sidebar.css",
	"css\modern-base.css",
	"css\theme\basic\style.css",
	"css\theme\cyan\style.css",
	"css\theme\redlight\style.css",
	"css\theme\xtra\style.css",
	"Dockerfile",
	"favicon.ico",
	"humans.txt",
	"img\icons\icon-128x128.png",
	"img\icons\icon-144x144.png",
	"img\icons\icon-152x152.png",
	"img\icons\icon-192x192.png",
	"img\icons\icon-384x384.png",
	"img\icons\icon-512x512.png",
	"img\icons\icon-72x72.png",
	"img\icons\icon-96x96.png",
	"img\logo-qcobjects-white.svg",
	"img\logo.png",
	"img\placeholder.svg",
	"img\Q_web copy.png",
	"img\Q_web-white.png",
	"img\Q_web.png",
	"img\Q_web.svg",
	"img\screenshots\screenshot1.png",
	"img\screenshots\screenshot1.webp",
	"img\screenshots\screenshot2.png",
	"img\screenshots\screenshot2.webp",
	"index.html",
	"js\init.js",
	"js\packages\installer.js",
	"js\packages\org.quickcorp.custom.components.js",
	"js\packages\org.quickcorp.custom.controllers.js",
	"js\packages\org.quickcorp.custom.effects.js",
	"js\packages\org.quickcorp.custom.js",
	"js\packages\org.quickcorp.custom.models.js",
	"js\packages\org.quickcorp.custom.views.js",
	"LICENSE.txt",
	"manifest.json",
	"node_modules\.bin\jasmine",
	"node_modules\.bin\jasmine.cmd",
	"node_modules\.bin\jasmine.ps1",
	"node_modules\.package-lock.json",
	"node_modules\balanced-match\.github\FUNDING.yml",
	"node_modules\balanced-match\index.js",
	"node_modules\balanced-match\LICENSE.md",
	"node_modules\balanced-match\package.json",
	"node_modules\balanced-match\README.md",
	"node_modules\brace-expansion\index.js",
	"node_modules\brace-expansion\LICENSE",
	"node_modules\brace-expansion\package.json",
	"node_modules\brace-expansion\README.md",
	"node_modules\concat-map\.travis.yml",
	"node_modules\concat-map\example\map.js",
	"node_modules\concat-map\index.js",
	"node_modules\concat-map\LICENSE",
	"node_modules\concat-map\package.json",
	"node_modules\concat-map\README.markdown",
	"node_modules\concat-map\test\map.js",
	"node_modules\fs.realpath\index.js",
	"node_modules\fs.realpath\LICENSE",
	"node_modules\fs.realpath\old.js",
	"node_modules\fs.realpath\package.json",
	"node_modules\fs.realpath\README.md",
	"node_modules\glob\common.js",
	"node_modules\glob\glob.js",
	"node_modules\glob\LICENSE",
	"node_modules\glob\package.json",
	"node_modules\glob\README.md",
	"node_modules\glob\sync.js",
	"node_modules\inflight\inflight.js",
	"node_modules\inflight\LICENSE",
	"node_modules\inflight\package.json",
	"node_modules\inflight\README.md",
	"node_modules\inherits\inherits.js",
	"node_modules\inherits\inherits_browser.js",
	"node_modules\inherits\LICENSE",
	"node_modules\inherits\package.json",
	"node_modules\inherits\README.md",
	"node_modules\jasmine\bin\jasmine.js",
	"node_modules\jasmine\lib\command.js",
	"node_modules\jasmine\lib\examples\jasmine.json",
	"node_modules\jasmine\lib\filters\console_spec_filter.js",
	"node_modules\jasmine\lib\jasmine.js",
	"node_modules\jasmine\lib\loadConfig.js",
	"node_modules\jasmine\lib\loader.js",
	"node_modules\jasmine\lib\reporters\completion_reporter.js",
	"node_modules\jasmine\lib\reporters\console_reporter.js",
	"node_modules\jasmine\MIT.LICENSE",
	"node_modules\jasmine\package.json",
	"node_modules\jasmine\README.md",
	"node_modules\jasmine-core\images\jasmine-horizontal.png",
	"node_modules\jasmine-core\images\jasmine-horizontal.svg",
	"node_modules\jasmine-core\images\jasmine_favicon.png",
	"node_modules\jasmine-core\lib\jasmine-core\boot\boot.js",
	"node_modules\jasmine-core\lib\jasmine-core\boot\boot0.js",
	"node_modules\jasmine-core\lib\jasmine-core\boot\boot1.js",
	"node_modules\jasmine-core\lib\jasmine-core\boot\node_boot.js",
	"node_modules\jasmine-core\lib\jasmine-core\boot.js",
	"node_modules\jasmine-core\lib\jasmine-core\boot0.js",
	"node_modules\jasmine-core\lib\jasmine-core\boot1.js",
	"node_modules\jasmine-core\lib\jasmine-core\example\node_example\lib\jasmine_examples\Player.js",
	"node_modules\jasmine-core\lib\jasmine-core\example\node_example\lib\jasmine_examples\Song.js",
	"node_modules\jasmine-core\lib\jasmine-core\example\node_example\spec\helpers\jasmine_examples\SpecHelper.js",
	"node_modules\jasmine-core\lib\jasmine-core\example\node_example\spec\jasmine_examples\PlayerSpec.js",
	"node_modules\jasmine-core\lib\jasmine-core\example\spec\PlayerSpec.js",
	"node_modules\jasmine-core\lib\jasmine-core\example\spec\SpecHelper.js",
	"node_modules\jasmine-core\lib\jasmine-core\example\src\Player.js",
	"node_modules\jasmine-core\lib\jasmine-core\example\src\Song.js",
	"node_modules\jasmine-core\lib\jasmine-core\jasmine-html.js",
	"node_modules\jasmine-core\lib\jasmine-core\jasmine.css",
	"node_modules\jasmine-core\lib\jasmine-core\jasmine.js",
	"node_modules\jasmine-core\lib\jasmine-core\json2.js",
	"node_modules\jasmine-core\lib\jasmine-core\node_boot.js",
	"node_modules\jasmine-core\lib\jasmine-core.js",
	"node_modules\jasmine-core\MIT.LICENSE",
	"node_modules\jasmine-core\package.json",
	"node_modules\jasmine-core\README.md",
	"node_modules\minimatch\LICENSE",
	"node_modules\minimatch\minimatch.js",
	"node_modules\minimatch\package.json",
	"node_modules\minimatch\README.md",
	"node_modules\once\LICENSE",
	"node_modules\once\once.js",
	"node_modules\once\package.json",
	"node_modules\once\README.md",
	"node_modules\path-is-absolute\index.js",
	"node_modules\path-is-absolute\license",
	"node_modules\path-is-absolute\package.json",
	"node_modules\path-is-absolute\readme.md",
	"node_modules\qcobjects\.dockerignore",
	"node_modules\qcobjects\.eslintrc.json",
	"node_modules\qcobjects\.github\FUNDING.yml",
	"node_modules\qcobjects\.github\ISSUE_TEMPLATE\bug_report.md",
	"node_modules\qcobjects\.github\ISSUE_TEMPLATE\custom.md",
	"node_modules\qcobjects\.github\ISSUE_TEMPLATE\feature_request.md",
	"node_modules\qcobjects\.github\ISSUE_TEMPLATE\issue-template.md",
	"node_modules\qcobjects\.github\workflows\codeql-analysis.yml",
	"node_modules\qcobjects\.github\workflows\npmpublish.yml",
	"node_modules\qcobjects\.project",
	"node_modules\qcobjects\AUTHOR.md",
	"node_modules\qcobjects\bin\install\raspberrypi_raspbian9\etc\qcobjects\config.json.template",
	"node_modules\qcobjects\bin\install\raspberrypi_raspbian9\etc\systemd\system\qcobjects.service",
	"node_modules\qcobjects\bin\install\rhel8\etc\qcobjects\config.json.template",
	"node_modules\qcobjects\bin\install\rhel8\etc\systemd\system\qcobjects.service",
	"node_modules\qcobjects\bin\install\ubuntu18\etc\qcobjects\config.json.template",
	"node_modules\qcobjects\bin\install\ubuntu18\etc\systemd\system\qcobjects.service",
	"node_modules\qcobjects\CHANGELOG.md",
	"node_modules\qcobjects\CNAME",
	"node_modules\qcobjects\CODE_OF_CONDUCT.md",
	"node_modules\qcobjects\config-example.json",
	"node_modules\qcobjects\CONTRIBUTING.md",
	"node_modules\qcobjects\doc\index.rst",
	"node_modules\qcobjects\doc\README.rst",
	"node_modules\qcobjects\docker-compose.test.yml",
	"node_modules\qcobjects\Dockerfile",
	"node_modules\qcobjects\favicon.ico",
	"node_modules\qcobjects\humans.txt",
	"node_modules\qcobjects\index.html",
	"node_modules\qcobjects\index.rst",
	"node_modules\qcobjects\LICENSE.txt",
	"node_modules\qcobjects\manifest.json",
	"node_modules\qcobjects\package.json",
	"node_modules\qcobjects\QCObjects.js",
	"node_modules\qcobjects\qcobjects_01.png",
	"node_modules\qcobjects\README-es.md",
	"node_modules\qcobjects\README.md",
	"node_modules\qcobjects\README.rst",
	"node_modules\qcobjects\robots.txt",
	"node_modules\qcobjects\SECURITY.md",
	"node_modules\qcobjects\sitemap.xml",
	"node_modules\qcobjects\spec\support\jasmine.json",
	"node_modules\qcobjects\spec\testsSpec.js",
	"node_modules\qcobjects\sw.js",
	"node_modules\qcobjects\VERSION",
	"node_modules\qcobjects\_config.yml",
	"node_modules\qcobjects-sdk\.eslintrc.json",
	"node_modules\qcobjects-sdk\.github\FUNDING.yml",
	"node_modules\qcobjects-sdk\.github\ISSUE_TEMPLATE\bug_report.md",
	"node_modules\qcobjects-sdk\.github\ISSUE_TEMPLATE\custom.md",
	"node_modules\qcobjects-sdk\.github\ISSUE_TEMPLATE\feature_request.md",
	"node_modules\qcobjects-sdk\.github\ISSUE_TEMPLATE\issue-template.md",
	"node_modules\qcobjects-sdk\.github\workflows\npmpublish.yml",
	"node_modules\qcobjects-sdk\CHANGELOG.md",
	"node_modules\qcobjects-sdk\CNAME",
	"node_modules\qcobjects-sdk\css\base-modal.css",
	"node_modules\qcobjects-sdk\css\basic-layout-embedded-nav.css",
	"node_modules\qcobjects-sdk\css\basic-layout.css",
	"node_modules\qcobjects-sdk\css\components\horizontal-list.css",
	"node_modules\qcobjects-sdk\css\components\list.css",
	"node_modules\qcobjects-sdk\css\components\splashscreen.css",
	"node_modules\qcobjects-sdk\css\modal.css",
	"node_modules\qcobjects-sdk\demo-tests\test-component-grid.html",
	"node_modules\qcobjects-sdk\demo-tests\test-component-list.html",
	"node_modules\qcobjects-sdk\demo-tests\test-component-notifications.html",
	"node_modules\qcobjects-sdk\demo-tests\test-component-slider.html",
	"node_modules\qcobjects-sdk\favicon.ico",
	"node_modules\qcobjects-sdk\index.rst",
	"node_modules\qcobjects-sdk\js\org.qcobjects.cloud.auth.session.data.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.cloud.auth.session.usertoken.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.components.grid.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.components.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.components.list.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.components.notifications.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.components.slider.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.components.splashscreen.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.controllers.form.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.controllers.grid.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.controllers.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.controllers.list.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.controllers.slider.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.controllers.swagger.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.effects.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.i18n_messages.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.modal.controllers.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.modal.effects.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.models.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.tools.canvas.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.tools.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.tools.layouts.js",
	"node_modules\qcobjects-sdk\js\org.qcobjects.views.js",
	"node_modules\qcobjects-sdk\package.json",
	"node_modules\qcobjects-sdk\QCObjects-SDK.js",
	"node_modules\qcobjects-sdk\README.md",
	"node_modules\qcobjects-sdk\README.rst",
	"node_modules\qcobjects-sdk\spec\support\jasmine.json",
	"node_modules\qcobjects-sdk\spec\testsSpec.js",
	"node_modules\qcobjects-sdk\templates\components\modalyoulose.tpl.html",
	"node_modules\qcobjects-sdk\templates\components\modalyouwin.tpl.html",
	"node_modules\qcobjects-sdk\templates\components\splashscreen.tpl.html",
	"node_modules\qcobjects-sdk\templates\components\swagger-ui.tpl.html",
	"node_modules\qcobjects-sdk\VERSION",
	"node_modules\qcobjects-sdk\_config.yml",
	"node_modules\wrappy\LICENSE",
	"node_modules\wrappy\package.json",
	"node_modules\wrappy\README.md",
	"node_modules\wrappy\wrappy.js",
	"README.md",
	"robots.txt",
	"spec\support\jasmine.json",
	"spec\testsSpec.js",
	"tempDocs\Qco-cli\create.md",
	"tempDocs\Qco-cli\qcobjects.md",
	"templates\components\article1.tpl.html",
	"templates\components\article2.tpl.html",
	"templates\components\article3.tpl.html",
	"templates\components\article4.tpl.html",
	"templates\components\blank.tpl.html",
	"templates\components\card.tpl.html",
	"templates\components\contentblock.tpl.html",
	"templates\components\footer.tpl.html",
	"templates\components\footer2.tpl.html",
	"templates\components\header.tpl.html",
	"templates\components\hero\hero-call-to-action.tpl.html",
	"templates\components\hero\hero-overlay.tpl.html",
	"templates\components\hero\hero-two-column-form.tpl.html",
	"templates\components\install-button.tpl.html",
	"templates\components\layout-basic.tpl.html",
	"templates\components\loading.tpl.html",
	"templates\components\loadingfooter.tpl.html",
	"templates\components\login-button.tpl.html",
	"templates\components\login2.tpl.html",
	"templates\components\loginform.tpl.html",
	"templates\components\modal.tpl.html",
	"templates\components\nav.tpl.html",
	"templates\components\pages\page1.tpl.html",
	"templates\components\pages\page2.tpl.html",
	"templates\components\pages\page3.tpl.html",
	"templates\components\product.tpl.html",
	"templates\components\profile.tpl.html",
	"templates\components\pwa.tpl.html",
	"templates\components\section1.tpl.html",
	"templates\components\section2.tpl.html",
	"templates\components\shadowed-card.tpl.html",
	"templates\components\signin-button.tpl.html",
	"templates\components\signup-form.tpl.html",
	"templates\components\signup.tpl.html",
	"templates\components\signupbuttons.tpl.html",
	"templates\components\signupform.tpl.html",
	"templates\components\signuppage.tpl.html",
	"templates\components\signupsuccessful.tpl.html",
	"templates\components\signupsuccessfulfooter.tpl.html",
	"templates\components\splashscreen.tpl.html",
	"templates\components\topmenu.tpl.html",
	"VERSION"])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
