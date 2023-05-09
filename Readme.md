"content_scripts": [
{
"matches": ["http://*/*", "https://*/*"],
"js": ["contents/counter/index.js"],
"css": ["contents/counter/index.css"],
"run_at": "document_idle",
"all_frames": false
}
]
