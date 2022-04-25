module.exports = {
    title: 'Vingkin',
    description: 'Vingkin\'s Blog',
    base: '/Blog/',
    theme: 'reco',
    icon: 'logo.jpg',
    markdown: {
        lineNumbers: true//代码显示行号
    },
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        // lastUpdated: '上次更新',
        subSidebar: 'auto',
        logo: 'logo.jpg',
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'Vingkin 的博客',
                items: [
                    { text: 'Github', link: 'https://github.com/Vingkin' }
                ]
            }
        ],
        sidebar: {
            '/guide': [
                {
                    title: '主页',
                    collapsable: false,
                    children: [
                        { title: '读前须知', path: '/guide/读前须知' }
                    ]
                },
                {
                    title: '面试',
                    collapsable: true,
                    children: [
                        {
                            title: 'Java',
                            children: [
                                { title: 'Java基础', path: '/guide/interview/Java' },
                                { title: 'Java并发', path: '/guide/interview/concurrent' },
                                { title: 'JVM', path: '/guide/interview/JVM' }
                            ]
                        },
                        {
                            title: '开发框架',
                            children: [
                                { title: 'Spring', path: '/guide/interview/Spring' },
                                { title: 'SpringMVC', path: '/guide/interview/SpringMVC' },
                                { title: 'MyBatis', path: '/guide/interview/MyBatis' },
                                { title: 'SpringBoot', path: '/guide/interview/SpringBoot' }
                            ]
                        },
                        {
                            title: '数据库',
                            children: [
                                { title: 'MySQL', path: '/guide/interview/Mysql' },
                                { title: 'Redis', path: '/guide/interview/Redis' }
                            ]
                        },
                        {
                            title: '计算机基础',
                            children: [
                                { title: '操作系统', path: '/guide/interview/OS' },
                                { title: '计算机网络' },
                                { title: '数据结构', path: '/guide/interview/DataStructure' },
                                { title: '设计模式', path: '/guide/interview/DesignMode' },
                                { title: '代码模板', path: '/guide/interview/CodeTemplate' }
                            ]
                        }
                    ]
                }
            ]
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: '有新的内容.',
                buttonText: '更新'
            }
        },
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'vingkin/Blog',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs/',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'docs',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '编辑此页'
    },
    plugins: [
        [
            'vuepress-plugin-code-copy', true
        ]
    ]
    // plugins: [
    //     ['vuepress-plugin-nuggets-style-copy', {
    //         copyText: '复制',
    //         tip: {
    //             content: '复制成功'
    //         }
    //     }]
    // ]
}