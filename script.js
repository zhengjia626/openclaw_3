document.addEventListener('DOMContentLoaded', function() {
    // 模拟插件状态检查
    checkPluginStatus();
    
    // 模拟系统信息获取
    getSystemInfo();
    
    // 模拟技能列表加载
    loadSkillsList();
    
    // 安装技能表单提交
    document.getElementById('install-skill-form').addEventListener('submit', function(e) {
        e.preventDefault();
        installSkill();
    });
    
    // 执行命令表单提交
    document.getElementById('execute-command-form').addEventListener('submit', function(e) {
        e.preventDefault();
        executeCommand();
    });
    
    // 设置表单提交
    document.getElementById('settings-form').addEventListener('submit', function(e) {
        e.preventDefault();
        saveSettings();
    });
});

// 模拟插件状态检查
function checkPluginStatus() {
    const statusElement = document.getElementById('plugin-status');
    statusElement.innerHTML = '<p>插件状态: <span style="color: green;">已激活</span></p>';
}

// 模拟系统信息获取
function getSystemInfo() {
    const infoElement = document.getElementById('system-info');
    const systemInfo = {
        platform: navigator.platform,
        browser: navigator.userAgent,
        date: new Date().toLocaleString()
    };
    
    infoElement.innerHTML = `
        <p>平台: ${systemInfo.platform}</p>
        <p>浏览器: ${systemInfo.browser.substring(0, 50)}...</p>
        <p>当前时间: ${systemInfo.date}</p>
    `;
}

// 模拟技能列表加载
function loadSkillsList() {
    const skillsListElement = document.getElementById('skills-list');
    
    // 模拟已安装的技能
    const skills = [
        { name: 'openclaw', version: '1.0.0', description: 'OpenClaw 核心技能' },
        { name: 'trae', version: '1.0.0', description: 'Trae 集成技能' }
    ];
    
    let skillsHTML = '<ul>';
    skills.forEach(skill => {
        skillsHTML += `
            <li>
                <strong>${skill.name}</strong> (v${skill.version})
                <p>${skill.description}</p>
            </li>
        `;
    });
    skillsHTML += '</ul>';
    
    skillsListElement.innerHTML = skillsHTML;
}

// 模拟技能安装
function installSkill() {
    const skillUrl = document.getElementById('skill-url').value;
    const skillsListElement = document.getElementById('skills-list');
    
    // 模拟安装过程
    skillsListElement.innerHTML = '<p>正在安装技能...</p>';
    
    // 模拟安装完成
    setTimeout(() => {
        loadSkillsList();
        alert('技能安装成功！');
        document.getElementById('skill-url').value = '';
    }, 1500);
}

// 模拟命令执行
function executeCommand() {
    const command = document.getElementById('command').value;
    const arguments = document.getElementById('arguments').value;
    const cwd = document.getElementById('cwd').value;
    const outputElement = document.getElementById('command-output');
    
    // 模拟命令执行过程
    outputElement.innerHTML = '<p>正在执行命令...</p>';
    
    // 模拟命令输出
    setTimeout(() => {
        const output = `
命令: ${command}
参数: ${arguments}
工作目录: ${cwd || '当前目录'}

执行结果:
模拟命令执行成功！
这是命令的模拟输出。
`;
        outputElement.innerHTML = `<pre>${output}</pre>`;
    }, 1000);
}

// 模拟设置保存
function saveSettings() {
    const logLevel = document.getElementById('log-level').value;
    const timeout = document.getElementById('timeout').value;
    
    // 模拟保存过程
    alert(`设置已保存！
日志级别: ${logLevel}
超时时间: ${timeout}秒`);
}