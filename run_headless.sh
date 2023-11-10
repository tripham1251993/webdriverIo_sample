windows_size="1920x1080x24"
node_command="npx wdio && allure generate --clean"
rm -rf allure-*
xvfb-run -s "-screen 0 $windows_size" $node_command
