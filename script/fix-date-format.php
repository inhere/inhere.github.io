#!/usr/bin/env php
<?php
/**
 * 修复content目录下所有md文件中缺少秒数的date字段
 * - 将 YYYY-MM-DDTHH:MM 格式转换为 YYYY-MM-DDTHH:MM:SS 格式
 * - 注释掉 authors: inhere 行
 * - 将 tags: [] 放到 taxonomies: 下
 */

// 定义要处理的根目录
$rootDir = __DIR__ . '/../content';
echo "修复目录：{$rootDir}\n";

// 检查目录是否存在
if (!is_dir($rootDir)) {
    echo "错误：目录 {$rootDir} 不存在！\n";
    exit(1);
}

// 定义要匹配的正则表达式
$pattern = '/^date: (\d{4}-\d{2}-\d{2}T\d{2}:\d{2})$/m';
$replacement = 'date: $1:00';

// 递归遍历目录
$iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($rootDir, RecursiveDirectoryIterator::SKIP_DOTS),
    RecursiveIteratorIterator::LEAVES_ONLY
);

$fixedCount = 0;
$processedCount = 0;

foreach ($iterator as $file) {
    // 只处理.md文件
    if ($file->getExtension() !== 'md') {
        continue;
    }

    $filePath = $file->getPathname();
    $processedCount++;

    // 读取文件内容
    $content = file_get_contents($filePath);
    $hasChange = false;
    $newContent = '';

    // 修复date字段
    if (preg_match($pattern, $content)) {
        $hasChange = true;
        $content = preg_replace($pattern, $replacement, $content);
    }

    // 注释 authors: inhere 行
    if (str_contains($content, "\nauthors: inhere")) {
        $hasChange = true;
        $content = str_replace("\nauthors: inhere", "\n# authors: inhere", $content);
    }

    // 将 tags: [] 放到 taxonomies: 下
    if (str_contains($content, "\ntags: [")) {
        $hasChange = true;
        $content = str_replace("\ntags: [", "\ntaxonomies:\n  tags: [", $content);
    }

    if ($hasChange) {
        // 写入修复后的内容
        if (file_put_contents($filePath, $content) !== false) {
            echo "已修复：{$filePath}\n";
            $fixedCount++;
        } else {
            echo "修复失败：{$filePath}\n";
        }
    }
}

echo "\n处理完成！\n";
echo "共处理 {$processedCount} 个.md文件\n";
echo "修复了 {$fixedCount} 个文件的date,authors字段\n";
