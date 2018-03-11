/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by
 * applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */
// Based on https://github.com/GoogleChrome/lighthouse/blob/master/.cz-config.js

module.exports = {
	allowCustomScopes: true,
	scopes: [],
	types: [
		{ value: "feat", name: "feat:		A new feature" },
		{ value: "tests", name: "tests:	Tests" },
		{ value: "docs", name: "docs:		Documentation" },
		{ value: "misc", name: "misc:		Other formats like tweaks and such" },
        { value: "chore", name: "chore:	Updating docs, linting etc" },
        { value: "fix", name: "fix:          Bugfix"},
        { value: "refactor", name: "refactor:     Refactored the code"}
	]
};
