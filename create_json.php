<?php

$content = file_get_contents('./marked_readme.md');


file_put_contents('detalhes.json',json_encode(['id' => 'detalhes', 'content' => $content]));

echo "Arquivo: detalhes.json criado.. ";