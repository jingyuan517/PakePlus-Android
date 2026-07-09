(function () {
    'use strict';
    (function blockDm6CSS() {
        if (document.getElementById('dm6-style')) return; 
        var s = document.createElement('style');
        s.id = 'dm6-style'; 
        s.textContent = '/* dm6-style blocked by data-modal v9 */';
        document.head.appendChild(s);
    })();

    var INNER_HTML =
        '<div class="modal-title" style="flex-shrink:0;">'
        +   '<i class="fas fa-database"></i><span>数据管理</span>'
        + '</div>'

        + '<div class="dm-body">'

        +   '<div class="dm-storage-card">'
        +     '<div class="dm-storage-header">'
        +       '<span class="dm-storage-title"><i class="fas fa-database" style="margin-right:5px;opacity:0.55"></i>存储用量</span>'
        +       '<span class="dm-storage-label" id="dm-storage-total">计算中…</span>'
        +     '</div>'
        +     '<div class="dm-stats-grid">'
        +       '<div class="dm-stat-block"><div class="dm-stat-block-icon" style="color:var(--accent-color)"><i class="fas fa-comments"></i></div><div class="dm-stat-pill-val" id="dm-stat-msgs">—</div><div class="dm-stat-pill-key">聊天记录</div></div>'
        +       '<div class="dm-stat-block"><div class="dm-stat-block-icon" style="color:#9C6FD4"><i class="fas fa-sliders"></i></div><div class="dm-stat-pill-val" id="dm-stat-settings">—</div><div class="dm-stat-pill-key">设置数据</div></div>'
        +       '<div class="dm-stat-block"><div class="dm-stat-block-icon" style="color:#3BC8A4"><i class="fas fa-images"></i></div><div class="dm-stat-pill-val" id="dm-stat-media">—</div><div class="dm-stat-pill-key">图片媒体</div></div>'
        +     '</div>'
        +     '<div class="dm-progress-track"><div class="dm-progress-fill" id="dm-storage-bar" style="width:0%"></div></div>'
        +   '</div>'

        +   '<div class="dm-section-label"><i class="fas fa-cloud-upload-alt"></i> 备份与恢复</div>'
        +   '<div class="dm-grid">'
        +     '<div class="dm-tile" id="dm-tile-full-backup">'
        +       '<div class="dm-tile-icon blue"><i class="fas fa-layer-group"></i></div>'
        +       '<div class="dm-tile-info"><div class="dm-tile-title">全量备份</div><div class="dm-tile-desc">所有设置与数据</div></div>'
        +       '<i class="fas fa-chevron-right dm-tile-arrow"></i>'
        +     '</div>'
        +     '<div class="dm-tile" id="dm-tile-chat-backup">'
        +       '<div class="dm-tile-icon teal"><i class="fas fa-comments"></i></div>'
        +       '<div class="dm-tile-info"><div class="dm-tile-title">聊天记录</div><div class="dm-tile-desc">消息内容单独备份</div></div>'
        +       '<i class="fas fa-chevron-right dm-tile-arrow"></i>'
        +     '</div>'
        +   '</div>'

        +   '<div style="display:none">'
        +     '<button id="export-all-settings"></button>'
        +     '<button id="import-all-settings"></button>'
        +     '<button id="export-chat-btn"></button>'
        +     '<button id="import-chat-btn"></button>'
        +   '</div>'

        +   '<div class="dm-section-label"><i class="fas fa-cloud"></i> 云同步</div>'
        +   '<div class="dm-grid" id="dm-cloud-tile-grid">'
        +     '<div class="dm-tile" id="dm-tile-cloud-sync">'
        +       '<div class="dm-tile-icon" style="background:linear-gradient(135deg,#9C6FD4,#7B52AB);color:#fff"><i class="fas fa-cloud-upload-alt"></i></div>'
        +       '<div class="dm-tile-info"><div class="dm-tile-title">Firebase 云端</div><div class="dm-tile-desc" id="dm-cloud-status">未登录</div></div>'
        +       '<i class="fas fa-chevron-right dm-tile-arrow"></i>'
        +     '</div>'
        +   '</div>'

        +   '<div class="dm-section-label"><i class="fas fa-info-circle"></i> 关于</div>'
        +   '<div class="dm-row-card">'
        +     '<div class="dm-row-item" id="replay-tutorial-btn-row" style="cursor:pointer">'
        +       '<div class="dm-row-icon slate"><i class="fas fa-compass"></i></div>'
        +       '<div class="dm-row-info"><div class="dm-row-title">重放新手引导</div><div class="dm-row-desc">重新播放功能介绍教程</div></div>'
        +       '<button class="dm-nav-btn" id="replay-tutorial-btn"><i class="fas fa-play"></i></button>'
        +     '</div>'
        +     '<div class="dm-row-item" id="open-credits-row" style="cursor:pointer">'
        +       '<div class="dm-row-icon violet"><i class="fas fa-scroll"></i></div>'
        +       '<div class="dm-row-info"><div class="dm-row-title">声明与致谢</div><div class="dm-row-desc">开源声明、致谢名单</div></div>'
        +       '<button class="dm-nav-btn" id="open-credits-btn"><i class="fas fa-chevron-right"></i></button>'
        +     '</div>'
        +   '</div>'

        +   '<div class="dm-section-label danger-label"><i class="fas fa-triangle-exclamation"></i> 危险操作</div>'
        +   '<div class="dm-danger-cards dm-danger-cards-row">'
        +     '<button class="dm-danger-card dm-danger-card-orange dm-danger-card-half" id="clear-chat-only">'
        +       '<div class="dm-danger-card-icon"><i class="fas fa-eraser"></i></div>'
        +       '<div class="dm-danger-card-body">'
        +         '<div class="dm-danger-card-title">清除会话</div>'
        +         '<div class="dm-danger-card-desc">删除本会话消息</div>'
        +       '</div>'
        +     '</button>'
        +     '<button class="dm-danger-card dm-danger-card-red dm-danger-card-half" id="clear-storage">'
        +       '<div class="dm-danger-card-icon"><i class="fas fa-skull-crossbones"></i></div>'
        +       '<div class="dm-danger-card-body">'
        +         '<div class="dm-danger-card-title">重置数据</div>'
        +         '<div class="dm-danger-card-desc">清空所有，不可撤销</div>'
        +       '</div>'
        +     '</button>'
        +   '</div>'

        + '</div>'
        + '<div class="modal-buttons" style="display:flex;justify-content:space-between;padding:12px 20px;border-top:1px solid var(--border-color);background:var(--secondary-bg);flex-shrink:0;">'
        +   '<button class="modal-btn modal-btn-secondary" id="back-data"><i class="fas fa-arrow-left"></i> 返回</button>'
        +   '<button class="modal-btn modal-btn-secondary" id="close-data">关闭</button>'
        + '</div>';

    var DRAWER_FULL_HTML =
        '<div class="dm-action-drawer" id="dm-drawer-full">'
        +   '<div class="dm-drawer-backdrop" id="dm-drawer-full-backdrop"></div>'
        +   '<div class="dm-drawer-sheet">'
        +     '<div class="dm-drawer-handle"></div>'
        +     '<div class="dm-drawer-title">'
        +       '<div class="dm-drawer-title-icon blue" style="background:linear-gradient(135deg,#4A90E2,#3576C8);color:#fff"><i class="fas fa-layer-group"></i></div>'
        +       '<div><div class="dm-drawer-title-text">全量备份</div><div class="dm-drawer-subtitle">包含所有设置、外观、字卡等数据</div></div>'
        +     '</div>'
        +     '<div class="dm-drawer-actions">'
        +       '<button class="dm-drawer-action-btn primary" id="export-all-settings-real">'
        +         '<div class="dm-drawer-btn-icon"><i class="fas fa-download"></i></div>'
        +         '<div class="dm-drawer-btn-text"><div class="dm-drawer-btn-title">导出备份</div><div class="dm-drawer-btn-desc">将数据保存为文件</div></div>'
        +       '</button>'
        +       '<button class="dm-drawer-action-btn" id="import-all-settings-real">'
        +         '<div class="dm-drawer-btn-icon"><i class="fas fa-upload"></i></div>'
        +         '<div class="dm-drawer-btn-text"><div class="dm-drawer-btn-title">从文件恢复</div><div class="dm-drawer-btn-desc">选择之前导出的备份文件</div></div>'
        +       '</button>'
        +     '</div>'
        +     '<button class="dm-drawer-cancel" id="dm-drawer-full-cancel">取消</button>'
        +   '</div>'
        + '</div>';

    var DRAWER_CHAT_HTML =
        '<div class="dm-action-drawer" id="dm-drawer-chat">'
        +   '<div class="dm-drawer-backdrop" id="dm-drawer-chat-backdrop"></div>'
        +   '<div class="dm-drawer-sheet">'
        +     '<div class="dm-drawer-handle"></div>'
        +     '<div class="dm-drawer-title">'
        +       '<div class="dm-drawer-title-icon" style="background:linear-gradient(135deg,#3BC8A4,#20A882);color:#fff"><i class="fas fa-comments"></i></div>'
        +       '<div><div class="dm-drawer-title-text">聊天记录</div><div class="dm-drawer-subtitle">仅包含消息内容</div></div>'
        +     '</div>'
        +     '<div class="dm-drawer-actions">'
        +       '<button class="dm-drawer-action-btn primary" id="export-chat-btn-real" style="background:linear-gradient(135deg,#3BC8A4,#20A882);border-color:#3BC8A4">'
        +         '<div class="dm-drawer-btn-icon"><i class="fas fa-download"></i></div>'
        +         '<div class="dm-drawer-btn-text"><div class="dm-drawer-btn-title">导出聊天</div><div class="dm-drawer-btn-desc">将消息记录保存为文件</div></div>'
        +       '</button>'
        +       '<button class="dm-drawer-action-btn" id="import-chat-btn-real">'
        +         '<div class="dm-drawer-btn-icon"><i class="fas fa-upload"></i></div>'
        +         '<div class="dm-drawer-btn-text"><div class="dm-drawer-btn-title">导入聊天</div><div class="dm-drawer-btn-desc">从文件恢复历史消息</div></div>'
        +       '</button>'
        +     '</div>'
        +     '<button class="dm-drawer-cancel" id="dm-drawer-chat-cancel">取消</button>'
        +   '</div>'
        + '</div>'

    var CLOUD_DRAWER_HTML =
        '<div class="dm-action-drawer" id="dm-drawer-cloud">'
        +   '<div class="dm-drawer-backdrop" id="dm-drawer-cloud-backdrop"></div>'
        +   '<div class="dm-drawer-sheet">'
        +     '<div class="dm-drawer-handle"></div>'
        +     '<div class="dm-drawer-title">'
        +       '<div class="dm-drawer-title-icon" style="background:linear-gradient(135deg,#9C6FD4,#7B52AB);color:#fff"><i class="fas fa-cloud"></i></div>'
        +       '<div><div class="dm-drawer-title-text">Firebase 云同步</div><div class="dm-drawer-subtitle">数据存到云端，永不丢失</div></div>'
        +     '</div>'
        +     '<div id="dm-cloud-body" style="padding:12px 20px;flex:1;overflow-y:auto;">'
        +       '<div id="dm-cloud-firebase-config" style="display:none;">'
        +         '<div style="margin-bottom:8px;font-size:12px;color:var(--text-secondary);">先在 <a href="https://console.firebase.google.com" target="_blank" style="color:var(--accent-color);">Firebase 控制台</a> 创建项目，然后把配置粘贴到下面：</div>'
        +         '<textarea id="dm-cloud-firebase-config-input" placeholder=\'{"apiKey":"xxx","authDomain":"xxx","projectId":"xxx"}\' style="width:100%;height:80px;padding:8px 10px;border:1px solid var(--border-color);border-radius:10px;background:var(--primary-bg);color:var(--text-primary);font-size:12px;outline:none;resize:vertical;box-sizing:border-box;font-family:monospace;"></textarea>'
        +         '<button id="dm-cloud-save-config-btn" style="width:100%;margin-top:6px;padding:8px;border:none;border-radius:8px;background:var(--accent-color);color:#fff;font-size:12px;font-weight:600;cursor:pointer;">保存配置</button>'
        +         '<div style="margin:10px 0;height:1px;background:var(--border-color);"></div>'
        +       '</div>'
        +       '<div id="dm-cloud-logged-out">'
        +         '<div style="display:flex;flex-direction:column;gap:10px;">'
        +           '<input type="email" id="dm-cloud-email" placeholder="邮箱" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--primary-bg);color:var(--text-primary);font-size:13px;outline:none;box-sizing:border-box;">'
        +           '<input type="password" id="dm-cloud-password" placeholder="密码" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--primary-bg);color:var(--text-primary);font-size:13px;outline:none;box-sizing:border-box;">'
        +           '<div style="display:flex;gap:8px;">'
        +             '<button id="dm-cloud-login-btn" class="dm-drawer-action-btn primary" style="flex:1;padding:10px;border:none;border-radius:10px;background:var(--accent-color);color:#fff;font-size:13px;font-weight:600;cursor:pointer;">登录</button>'
        +             '<button id="dm-cloud-register-btn" class="dm-drawer-action-btn primary" style="flex:1;padding:10px;border:none;border-radius:10px;background:linear-gradient(135deg,#9C6FD4,#7B52AB);color:#fff;font-size:13px;font-weight:600;cursor:pointer;">注册</button>'
        +           '</div>'
        +         '</div>'
        +       '</div>'
        +       '<div id="dm-cloud-logged-in" style="display:none;">'
        +         '<div style="display:flex;flex-direction:column;gap:10px;">'
        +           '<div style="display:flex;align-items:center;gap:10px;padding:12px;background:rgba(60,200,120,0.08);border-radius:10px;border:1px solid rgba(60,200,120,0.2);">'
        +             '<i class="fas fa-check-circle" style="color:#3BC8A4;font-size:18px;"></i>'
        +             '<div style="flex:1;font-size:13px;"><span style="font-weight:600;" id="dm-cloud-user-display"></span><br><span style="color:var(--text-secondary);font-size:11px;" id="dm-cloud-last-sync">尚未同步</span></div>'
        +           '</div>'
        +           '<div class="dm-drawer-actions" style="margin:0;">'
        +             '<button class="dm-drawer-action-btn primary" id="dm-cloud-upload-btn" style="background:linear-gradient(135deg,var(--accent-color),rgba(var(--accent-color-rgb),0.7));border-color:var(--accent-color)">'
        +               '<div class="dm-drawer-btn-icon"><i class="fas fa-upload"></i></div>'
        +               '<div class="dm-drawer-btn-text"><div class="dm-drawer-btn-title">上传到云端</div><div class="dm-drawer-btn-desc">将本地数据保存到服务器</div></div>'
        +             '</button>'
        +             '<button class="dm-drawer-action-btn" id="dm-cloud-download-btn">'
        +               '<div class="dm-drawer-btn-icon"><i class="fas fa-download"></i></div>'
        +               '<div class="dm-drawer-btn-text"><div class="dm-drawer-btn-title">从云端恢复</div><div class="dm-drawer-btn-desc">用云端数据覆盖本地</div></div>'
        +             '</button>'
        +           '</div>'
        +           '<button id="dm-cloud-logout-btn" style="width:100%;padding:9px;border:1px solid rgba(255,80,80,0.3);border-radius:10px;background:rgba(255,80,80,0.06);color:#ff5050;font-size:12px;font-weight:600;cursor:pointer;">退出登录</button>'
        +         '</div>'
        +       '</div>'
        +     '</div>'
        +     '<button class="dm-drawer-cancel" id="dm-drawer-cloud-cancel">关闭</button>'
        +   '</div>'
        + '</div>';

    function isCorrect(mc) {
        return mc.querySelector('.modal-title') !== null
            && mc.querySelector('.dm-storage-card') !== null
            && mc.querySelector('.dm6') === null
            && mc.querySelector('.dm6-tabs') === null;
    }

    function ensureDrawersOnBody() {
        var DRAWER_IDS = ['dm-drawer-full', 'dm-drawer-chat', 'dm-drawer-cloud'];
        DRAWER_IDS.forEach(function(id) {
            var existing = document.getElementById(id);
            if (existing && existing.parentElement === document.body) return;
            if (existing) {
                document.body.appendChild(existing);
                return;
            }
            var dummy = document.createElement('div');
            if (id === 'dm-drawer-full') dummy.innerHTML = DRAWER_FULL_HTML;
            else if (id === 'dm-drawer-chat') dummy.innerHTML = DRAWER_CHAT_HTML;
            else dummy.innerHTML = CLOUD_DRAWER_HTML;
            document.body.appendChild(dummy.firstElementChild);
        });
    }

    function writeHTML(mc) {
        mc.innerHTML = INNER_HTML;
        mc.dataset.dm6Built = 'v11'; 
        ensureDrawersOnBody();
        bindAll(mc);
    }

    function ensureHTML(mc) {
        if (!mc) return;
        if (mc.dataset.dm6Built !== 'v11' || !isCorrect(mc)) writeHTML(mc);
        else ensureDrawersOnBody(); 
    }

    function fmt(b) {
        if (b < 1024) return Math.round(b) + ' B';
        if (b < 1048576) return (b / 1024).toFixed(1) + ' KB';
        return (b / 1048576).toFixed(2) + ' MB';
    }

    function applyStats(total, msgs, cfg, media) {
        var g = function (id) { return document.getElementById(id); };

        // 直接显示手动累加的分类
        if (g('dm-stat-msgs'))     g('dm-stat-msgs').textContent     = fmt(msgs);
        if (g('dm-stat-settings')) g('dm-stat-settings').textContent = fmt(cfg);
        if (g('dm-stat-media'))    g('dm-stat-media').textContent    = fmt(media);

        // 顶部总用量 = total（手动累加），进度条 = total / quota
        var totalEl = g('dm-storage-total');
        var barEl   = g('dm-storage-bar');

        if (navigator.storage && navigator.storage.estimate) {
            navigator.storage.estimate().then(function(est) {
                var quota = est.quota || 0;
                var pct = quota > 0 ? Math.min(100, total / quota * 100) : 0;
                var pctStr = pct.toFixed(1);
                var quotaStr = quota >= 1073741824 ? (quota/1073741824).toFixed(2)+' GB'
                             : quota >= 1048576    ? (quota/1048576).toFixed(1)+' MB'
                             : quota > 0           ? (quota/1024).toFixed(1)+' KB' : '未知';
                if (totalEl) totalEl.textContent = fmt(total) + ' / ' + quotaStr + ' (' + pctStr + '%)';
                if (barEl) {
                    barEl.style.width = pctStr + '%';
                    barEl.style.background = pct > 80
                        ? 'linear-gradient(90deg,#FF3B30,#CC0000)'
                        : pct > 50
                        ? 'linear-gradient(90deg,#FF9F0A,#E07000)'
                        : 'linear-gradient(90deg,var(--accent-color),rgba(var(--accent-color-rgb),0.6))';
                }
            }).catch(function() {
                if (totalEl) totalEl.textContent = fmt(total);
                if (barEl) barEl.style.width = '0%';
            });
        } else {
            if (totalEl) totalEl.textContent = fmt(total);
            if (barEl) barEl.style.width = '0%';
        }
    }

    function updateStats() {
        var total = 0, msgs = 0, cfg = 0, media = 0;
        var processLS = function () {
            for (var i = 0; i < localStorage.length; i++) {
                var k = localStorage.key(i) || '';
                var v = localStorage.getItem(k) || '';
                var bytes = (k.length + v.length) * 2;
                total += bytes;
                if (/messages|msgs|session/i.test(k)) msgs += bytes;
                else if (v.startsWith('data:image') || v.startsWith('data:video')) media += bytes;
                else cfg += bytes;
            }
            applyStats(total, msgs, cfg, media);
        };
        try {
            if (window.localforage) {
                localforage.keys().then(function (keys) {
                    var promises = keys.map(function (k) {
                        // favAudio_ 是音频 Base64，直接估算大小，不读内容避免内存爆炸
                        if (k.startsWith('favAudio_')) {
                            return localforage.getItem(k).then(function(raw) {
                                var bytes = typeof raw === 'string' ? raw.length * 2 : 0;
                                return { k: k, b: bytes };
                            }).catch(function() { return { k: k, b: 0 }; });
                        }
                        return localforage.getItem(k).then(function (raw) {
                            if (raw == null) return { k: k, b: 0 };
                            var str = typeof raw === 'string' ? raw : JSON.stringify(raw);
                            return { k: k, b: (k.length + str.length) * 2 };
                        });
                    });
                    Promise.all(promises).then(function (results) {
                        results.forEach(function (r) {
                            total += r.b;
                            if (/messages|msgs|session/i.test(r.k)) msgs += r.b;
                            else if (/avatar|image|photo|bg|background|wallpaper/i.test(r.k)) media += r.b;
                            else cfg += r.b;
                        });
                        applyStats(total, msgs, cfg, media);
                    }).catch(processLS);
                }).catch(processLS);
            } else { processLS(); }
        } catch (e) { processLS(); }
    }

    function syncToggles() {
        var n = document.getElementById('notif-permission-toggle');
        if (n) n.checked = localStorage.getItem('notifEnabled') === '1'
                        && 'Notification' in window
                        && Notification.permission === 'granted';
    }

    function openDrawer(drawerId) {
        var drawer = document.getElementById(drawerId);
        if (!drawer) return;
        drawer.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function closeDrawer(drawerId) {
        var drawer = document.getElementById(drawerId);
        if (!drawer) return;
        drawer.classList.remove('open');
        document.body.style.overflow = '';
    }

    function bindAll(mc) {
        var closeBtn = mc.querySelector('#close-data');
        if (closeBtn) closeBtn.addEventListener('click', function () {
            var modal = document.getElementById('data-modal');
            if (modal && typeof hideModal === 'function') hideModal(modal);
        });

        var backBtn = mc.querySelector('#back-data');
        if (backBtn) backBtn.addEventListener('click', function () {
            var dataModal = document.getElementById('data-modal');
            if (dataModal && typeof hideModal === 'function') hideModal(dataModal);
            var settingsModal = document.getElementById('settings-modal');
            if (settingsModal && typeof showModal === 'function') showModal(settingsModal);
        });

        var tileFullBackup = mc.querySelector('#dm-tile-full-backup');
        if (tileFullBackup) tileFullBackup.addEventListener('click', function () { openDrawer('dm-drawer-full'); });

        var tileChatBackup = mc.querySelector('#dm-tile-chat-backup');
        if (tileChatBackup) tileChatBackup.addEventListener('click', function () { openDrawer('dm-drawer-chat'); });

        var fullDrawer = document.getElementById('dm-drawer-full');
        if (fullDrawer) {
            var backdrop1 = fullDrawer.querySelector('#dm-drawer-full-backdrop');
            if (backdrop1) backdrop1.addEventListener('click', function () { closeDrawer('dm-drawer-full'); });
            var cancelBtn1 = fullDrawer.querySelector('#dm-drawer-full-cancel');
            if (cancelBtn1) cancelBtn1.addEventListener('click', function () { closeDrawer('dm-drawer-full'); });
            var exportAllReal = fullDrawer.querySelector('#export-all-settings-real');
            if (exportAllReal) exportAllReal.addEventListener('click', function () {
                closeDrawer('dm-drawer-full');
                if (typeof exportAllData === 'function') exportAllData();
            });
            var importAllReal = fullDrawer.querySelector('#import-all-settings-real');
            if (importAllReal) importAllReal.addEventListener('click', function () {
                closeDrawer('dm-drawer-full');
                var inp = document.createElement('input');
                inp.type = 'file'; inp.accept = '.json,.zip,application/json,application/zip';
                inp.onchange = function (e) {
                    var f = e.target.files && e.target.files[0];
                    if (f && typeof importAllData === 'function') importAllData(f);
                };
                inp.click();
            });
        }

        var chatDrawer = document.getElementById('dm-drawer-chat');
        if (chatDrawer) {
            var backdrop2 = chatDrawer.querySelector('#dm-drawer-chat-backdrop');
            if (backdrop2) backdrop2.addEventListener('click', function () { closeDrawer('dm-drawer-chat'); });
            var cancelBtn2 = chatDrawer.querySelector('#dm-drawer-chat-cancel');
            if (cancelBtn2) cancelBtn2.addEventListener('click', function () { closeDrawer('dm-drawer-chat'); });
            var exportChatReal = chatDrawer.querySelector('#export-chat-btn-real');
            if (exportChatReal) exportChatReal.addEventListener('click', function () {
                closeDrawer('dm-drawer-chat');
                if (typeof exportChatHistory === 'function') exportChatHistory();
            });
            var importChatReal = chatDrawer.querySelector('#import-chat-btn-real');
            if (importChatReal) importChatReal.addEventListener('click', function () {
                closeDrawer('dm-drawer-chat');
                var inp = document.createElement('input');
                inp.type = 'file'; inp.accept = '.json';
                inp.onchange = function (e) {
                    var f = e.target.files && e.target.files[0];
                    if (f && typeof importChatHistory === 'function') importChatHistory(f);
                };
                inp.click();
            });
        }

        var clearChatBtn = mc.querySelector('#clear-chat-only');
        if (clearChatBtn) clearChatBtn.addEventListener('click', function () {
            if (!confirm('确定要清除当前会话的所有消息吗？\n\n所有设置、头像、字卡等数据将保留，仅聊天记录会被删除。\n\n此操作无法恢复！')) return;
            // 修复：直接赋值 let messages（window.messages 赋值不影响 let 绑定）
            messages = [];
            displayedMessageCount = typeof HISTORY_BATCH_SIZE !== 'undefined' ? HISTORY_BATCH_SIZE : 20;
            try { localStorage.removeItem('BACKUP_V1_critical'); } catch(e) {}
            try { localStorage.removeItem('BACKUP_V1_timestamp'); } catch(e) {}
            if (window.localforage && typeof getStorageKey === 'function') {
                localforage.setItem(getStorageKey('chatMessages'), []).catch(function() {});
            }
            if (typeof renderMessages === 'function') renderMessages();
            if (typeof showNotification === 'function') showNotification('聊天记录已清除', 'success');
        });

        var clearBtn = mc.querySelector('#clear-storage');
        if (clearBtn) clearBtn.addEventListener('click', function () {
            if (!confirm('⚠️ 确定要清空全部数据吗？\n\n所有消息、设置、字卡、头像等将被永久删除，不可恢复！')) return;
            if (!confirm('最后确认：清空后页面将自动刷新，无法撤销，继续吗？')) return;
            window._skipBackup = true;
            var doReset = function () {
                localStorage.clear();
                if (typeof showNotification === 'function') showNotification('所有数据已清空，即将刷新…', 'info', 2000);
                setTimeout(function () { window.location.href = window.location.pathname + '?reset=' + Date.now(); }, 2000);
            };
            window.localforage ? localforage.clear().then(doReset).catch(doReset) : doReset();
        });

        var exportAll = mc.querySelector('#export-all-settings');
        if (exportAll) exportAll.addEventListener('click', function () {
            if (typeof exportAllData === 'function') exportAllData();
        });

        var importAll = mc.querySelector('#import-all-settings');
        if (importAll) importAll.addEventListener('click', function () {
            var inp = document.createElement('input');
            inp.type = 'file'; inp.accept = '.json,.zip,application/json,application/zip';
            inp.onchange = function (e) {
                var f = e.target.files && e.target.files[0];
                if (f && typeof importAllData === 'function') importAllData(f);
            };
            inp.click();
        });

        var exportChat = mc.querySelector('#export-chat-btn');
        if (exportChat) exportChat.addEventListener('click', function () {
            if (typeof exportChatHistory === 'function') exportChatHistory();
        });

        var importChat = mc.querySelector('#import-chat-btn');
        if (importChat) importChat.addEventListener('click', function () {
            var inp = document.createElement('input');
            inp.type = 'file'; inp.accept = '.json';
            inp.onchange = function (e) {
                var f = e.target.files && e.target.files[0];
                if (f && typeof importChatHistory === 'function') importChatHistory(f);
            };
            inp.click();
        });

        var cloudTile = mc.querySelector('#dm-tile-cloud-sync');
        if (cloudTile) cloudTile.addEventListener('click', function () {
          updateCloudDrawerUI();
          openDrawer('dm-drawer-cloud');
        });

        var cloudDrawer = document.getElementById('dm-drawer-cloud');
        if (cloudDrawer) {
          var cloudBackdrop = cloudDrawer.querySelector('#dm-drawer-cloud-backdrop');
          if (cloudBackdrop) cloudBackdrop.addEventListener('click', function () { closeDrawer('dm-drawer-cloud'); });
          var cloudCancel = cloudDrawer.querySelector('#dm-drawer-cloud-cancel');
          if (cloudCancel) cloudCancel.addEventListener('click', function () { closeDrawer('dm-drawer-cloud'); });

          var loginBtn = cloudDrawer.querySelector('#dm-cloud-login-btn');
          if (loginBtn) loginBtn.addEventListener('click', async function () {
            var email = document.getElementById('dm-cloud-email');
            var password = document.getElementById('dm-cloud-password');
            if (!email || !email.value || !password || !password.value) {
              if (typeof showNotification === 'function') showNotification('请填写邮箱和密码', 'warning');
              return;
            }
            try {
              loginBtn.disabled = true; loginBtn.textContent = '登录中…';
              if (window.CloudSync) await CloudSync.login(email.value.trim(), password.value);
              if (typeof showNotification === 'function') showNotification('登录成功', 'success');
              updateCloudDrawerUI();
            } catch (e) {
              if (typeof showNotification === 'function') showNotification('登录失败: ' + e.message, 'error');
            } finally {
              loginBtn.disabled = false; loginBtn.textContent = '登录';
            }
          });

          var registerBtn = cloudDrawer.querySelector('#dm-cloud-register-btn');
          if (registerBtn) registerBtn.addEventListener('click', async function () {
            var email = document.getElementById('dm-cloud-email');
            var password = document.getElementById('dm-cloud-password');
            if (!email || !email.value || !password || !password.value) {
              if (typeof showNotification === 'function') showNotification('请填写邮箱和密码', 'warning');
              return;
            }
            try {
              registerBtn.disabled = true; registerBtn.textContent = '注册中…';
              if (window.CloudSync) await CloudSync.register(email.value.trim(), password.value);
              if (typeof showNotification === 'function') showNotification('注册成功，已自动登录', 'success');
              updateCloudDrawerUI();
            } catch (e) {
              if (typeof showNotification === 'function') showNotification('注册失败: ' + e.message, 'error');
            } finally {
              registerBtn.disabled = false; registerBtn.textContent = '注册';
            }
          });

          var uploadBtn = cloudDrawer.querySelector('#dm-cloud-upload-btn');
          if (uploadBtn) uploadBtn.addEventListener('click', async function () {
            try {
              uploadBtn.disabled = true; uploadBtn.textContent = '上传中…';
              if (window.CloudSync) {
                await CloudSync.upload();
                if (typeof showNotification === 'function') showNotification('上传成功', 'success');
              }
              updateCloudDrawerUI();
            } catch (e) {
              if (typeof showNotification === 'function') showNotification('上传失败: ' + e.message, 'error');
            } finally {
              uploadBtn.disabled = false; uploadBtn.textContent = '上传到云端';
            }
          });

          var downloadBtn = cloudDrawer.querySelector('#dm-cloud-download-btn');
          if (downloadBtn) downloadBtn.addEventListener('click', async function () {
            if (!confirm('从云端恢复将覆盖本地所有数据，确定继续？')) return;
            try {
              downloadBtn.disabled = true; downloadBtn.textContent = '恢复中…';
              if (window.CloudSync) {
                await CloudSync.download();
                if (typeof showNotification === 'function') showNotification('数据已恢复，请刷新页面', 'success');
              }
              updateCloudDrawerUI();
            } catch (e) {
              if (typeof showNotification === 'function') showNotification('恢复失败: ' + e.message, 'error');
            } finally {
              downloadBtn.disabled = false; downloadBtn.textContent = '从云端恢复';
            }
          });

          var logoutBtn = cloudDrawer.querySelector('#dm-cloud-logout-btn');
          if (logoutBtn) logoutBtn.addEventListener('click', function () {
            if (window.CloudSync) CloudSync.logout();
            updateCloudDrawerUI();
            if (typeof showNotification === 'function') showNotification('已退出登录', 'info');
          });
        }

        var firebaseConfigBtn = cloudDrawer && cloudDrawer.querySelector('#dm-cloud-save-config-btn');
        if (firebaseConfigBtn) firebaseConfigBtn.addEventListener('click', function () {
          var input = document.getElementById('dm-cloud-firebase-config-input');
          if (!input || !input.value) {
            if (typeof showNotification === 'function') showNotification('请粘贴 Firebase 配置 JSON', 'warning');
            return;
          }
          try {
            var config = JSON.parse(input.value);
            if (window.__initFirebase) __initFirebase(config);
            if (typeof showNotification === 'function') showNotification('Firebase 配置已保存', 'success');
            updateCloudDrawerUI();
          } catch (e) {
            if (typeof showNotification === 'function') showNotification('配置格式错误，请检查 JSON', 'error');
          }
        });

        function updateCloudDrawerUI() {
          var hasFirebase = typeof firebase !== 'undefined' && firebase.apps && firebase.apps.length > 0;
          var fbConfigEl = document.getElementById('dm-cloud-firebase-config');
          if (fbConfigEl) fbConfigEl.style.display = hasFirebase ? 'none' : '';

          var configInput = document.getElementById('dm-cloud-firebase-config-input');
          if (configInput && !configInput.value) {
            var existing = window.__getFirebaseConfig ? __getFirebaseConfig() : null;
            if (existing) configInput.value = JSON.stringify(existing, null, 2);
          }

          var status = window.CloudSync ? CloudSync.getStatus() : { connected: false, msg: '模块未加载' };
          if (!hasFirebase) {
            status = { connected: false, msg: '点击配置 Firebase' };
          }
          var loggedOut = document.getElementById('dm-cloud-logged-out');
          var loggedIn = document.getElementById('dm-cloud-logged-in');
          var statusEl = document.getElementById('dm-cloud-status');
          if (loggedOut) loggedOut.style.display = status.connected ? 'none' : '';
          if (loggedIn) loggedIn.style.display = status.connected ? '' : 'none';
          var displayEl = document.getElementById('dm-cloud-user-display');
          if (displayEl) displayEl.textContent = status.email || '';
          var syncEl = document.getElementById('dm-cloud-last-sync');
          if (syncEl) syncEl.textContent = status.lastSync ? '上次同步: ' + new Date(status.lastSync).toLocaleString() : '尚未同步';
          if (statusEl) statusEl.textContent = status.connected ? '已连接' : status.msg;
        }

        var creditsBtn = mc.querySelector('#open-credits-btn');
        if (creditsBtn) creditsBtn.addEventListener('click', function () {
            var dataModal = document.getElementById('data-modal');
            if (dataModal && typeof hideModal === 'function') hideModal(dataModal);
            var disc = document.getElementById('disclaimer-modal');
            if (disc && typeof showModal === 'function') showModal(disc);
        });

        var tutorialBtn = mc.querySelector('#replay-tutorial-btn');
        if (tutorialBtn) tutorialBtn.addEventListener('click', function () {
            var dataModal = document.getElementById('data-modal');
            if (dataModal && typeof hideModal === 'function') hideModal(dataModal);
            if (typeof startTour === 'function') {
                if (window.localforage && window.APP_PREFIX) {
                    localforage.removeItem(APP_PREFIX + 'tour_seen').then(startTour).catch(startTour);
                } else { startTour(); }
            }
        });
    }

    function onModalOpen(modal) {
        var mc = modal.querySelector('.modal-content');
        if (!mc) return;
        ensureHTML(mc);
        requestAnimationFrame(function () {
            mc.style.opacity = '1';
            mc.style.transform = 'none';
        });
        setTimeout(function () {
            updateStats();
            syncToggles();
        }, 60);
    }

    var _styleObserver = null;
    var _contentObserver = null;

    function init() {
        var modal = document.getElementById('data-modal');
        if (!modal) return;

        var mc = modal.querySelector('.modal-content');
        if (mc) mc.dataset.dm6Built = 'v9';

        if (_styleObserver) { _styleObserver.disconnect(); _styleObserver = null; }
        if (_contentObserver) { _contentObserver.disconnect(); _contentObserver = null; }

        _styleObserver = new MutationObserver(function () {
            var d = modal.style.display;
            if (d === 'flex' || d === 'block') onModalOpen(modal);
        });
        _styleObserver.observe(modal, { attributes: true, attributeFilter: ['style'] });

        if (mc) {
            _contentObserver = new MutationObserver(function () {
                var mc2 = modal.querySelector('.modal-content');
                if (mc2 && !isCorrect(mc2)) {
                    mc2.dataset.dm6Built = 'v9';
                    writeHTML(mc2);
                }
            });
            _contentObserver.observe(mc, { childList: true, subtree: false });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { setTimeout(init, 0); });
    } else {
        init();
    }

    window.updateStats = updateStats;

})();

function updateStorageUsageBar() {
    if (typeof window.updateStats === 'function') window.updateStats();
}

(function() {
    var orig = window.showModal;
    if (typeof orig === 'function') {
        window.showModal = function(el) {
            orig.apply(this, arguments);
            if (el && el.id === 'data-modal') {
                setTimeout(updateStorageUsageBar, 250);
            }
        };
    }
})();

document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('data-settings');
    if (btn) {
        btn.addEventListener('click', function() { setTimeout(updateStorageUsageBar, 350); });
    }
});

window._sendPartnerNotification = function(title, body) {
    try {
        if (localStorage.getItem('notifEnabled') !== '1') return;
        if (!('Notification' in window)) return;
        if (Notification.permission !== 'granted') return;
        if (!document.hidden) return;
        new Notification(title || '传讯', {
            body: body || '对方发来了消息',
            icon: (document.querySelector('#partner-avatar img') || {}).src,
            tag: 'partner-msg',
            renotify: true
        });
    } catch(e) {}
};

window.handleNotifToggle = function(checkbox) {
    var statusEl = document.getElementById('notif-status-text');
    if (!('Notification' in window)) {
        checkbox.checked = false;
        if (statusEl) statusEl.textContent = '⚠️ 您的浏览器不支持通知功能，请更换浏览器';
        return;
    }
    if (checkbox.checked) {
        Notification.requestPermission().then(function(perm) {
            if (perm === 'granted') {
                if (statusEl) statusEl.textContent = '✅ 已开启 — 当页面在后台时，收到消息会弹出系统通知';
                localStorage.setItem('notifEnabled', '1');
                try { new Notification('传讯通知已开启 ✨', { body: '你现在可以在后台收到消息提醒了', tag: 'notif-test' }); } catch(e) {}
            } else if (perm === 'denied') {
                checkbox.checked = false;
                if (statusEl) statusEl.textContent = '❌ 权限被拒绝，请自行搜索如何开启';
                localStorage.setItem('notifEnabled', '0');
            } else {
                checkbox.checked = false;
                if (statusEl) statusEl.textContent = '⚠️ 未做出选择，请重试';
                localStorage.setItem('notifEnabled', '0');
            }
        }).catch(function() {
            checkbox.checked = false;
            if (statusEl) statusEl.textContent = '❌ 请求权限失败，请自行搜索如何打开';
            localStorage.setItem('notifEnabled', '0');
        });
    } else {
        if (statusEl) statusEl.textContent = '已关闭 — 后台将不再弹出消息提醒';
        localStorage.setItem('notifEnabled', '0');
    }
};

document.addEventListener('DOMContentLoaded', function() {
    var toggle   = document.getElementById('notif-permission-toggle');
    var statusEl = document.getElementById('notif-status-text');
    if (!toggle) return;
    var enabled = localStorage.getItem('notifEnabled') === '1';
    var granted = ('Notification' in window) && Notification.permission === 'granted';
    toggle.checked = enabled && granted;
    if (!statusEl) return;
    if (toggle.checked) {
        statusEl.textContent = '✅ 已开启 — 当页面在后台时，收到消息会弹出系统通知';
    } else if ('Notification' in window && Notification.permission === 'denied') {
        statusEl.textContent = '❌ 通知权限已被浏览器屏蔽，请自行搜索如何开启';
    } else {
        statusEl.textContent = '关闭状态 — 开启后可在后台接收消息提醒';
    }
});
