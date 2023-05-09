"content_scripts": [
{
"matches": ["http://*/*", "https://*/*"],
"js": ["contents/counter/index.js"],
"css": ["contents/counter/index.css"],
"run_at": "document_idle",
"all_frames": false
}
]

# 权限列表

https://developer.chrome.com/docs/extensions/mv2/declare_permissions/

# API reference

https://developer.chrome.com/docs/extensions/reference/#stable_apis
