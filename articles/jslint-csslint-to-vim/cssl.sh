#!/bin/bash

csslint --format="compact" \
--errors=\
"errors",\
"display-property-grouping",\
"regex-selectors" \
--warnings=\
"adjoining-classes",\
"important",\
"box-sizing",\
"overqualified-elements",\
"fallback-colors",\
"duplicate-properties",\
"empty-rules",\
"rules-count",\
"font-sizes",\
"font-faces",\
"floats",\
"outline-none",\
"shorthand",\
"text-indent",\
"universal-selector",\
"unqualified-attributes",\
"vendor-prefix",\
"zero-units" \
$@ | \
sed -E 's/: line ([[:digit:]]+), col [[:digit:]]+,/(\1):/' | grep -v '^$'
# 此处为和 Javascript Lint 的 errorformat 保持一致


