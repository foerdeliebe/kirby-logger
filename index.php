<?php

@include_once __DIR__ . '/vendor/autoload.php';

\Kirby\Cms\App::plugin('michnhokn/logger', [
    'options' => [
        'block' => [
            'actions' => ['render'],
            'types' => ['system', 'panel'],
        ]
    ],
    'translations' => [
        'en' => [
            'michnhokn.logger.title' => 'Logger',
            'michnhokn.logger.logs' => 'Logs',
            'michnhokn.logger.reset' => 'Reset filter',
            'michnhokn.logger.type' => 'Type',
            'michnhokn.logger.action' => 'Action',
            'michnhokn.logger.slug' => 'Slug',
            'michnhokn.logger.old' => 'Old data',
            'michnhokn.logger.searchData' => 'Search data',
            'michnhokn.logger.new' => 'New data',
            'michnhokn.logger.empty' => 'No log entries yet',
        ],
        'de' => [
            'michnhokn.logger.title' => 'Logger',
            'michnhokn.logger.logs' => 'Logs',
            'michnhokn.logger.reset' => 'Filter zurücksetzten',
            'michnhokn.logger.type' => 'Typ',
            'michnhokn.logger.action' => 'Aktion',
            'michnhokn.logger.slug' => 'Slug',
            'michnhokn.logger.old' => 'Alte Daten',
            'michnhokn.logger.searchData' => 'Daten durchsuchen',
            'michnhokn.logger.new' => 'Neue Daten',
            'michnhokn.logger.empty' => 'Bisher keine Log Einträge',
        ],
    ],
    'hooks' => [
        'system.loadPlugins:after' => function () {
            \Michnhokn\Logger::connect();
        },
        '*:after' => function (\Kirby\Cms\Event $event) {
            \Michnhokn\Logger::log($event);
        },
    ],
    'api' => [
        'routes' => [
            [
                'pattern' => 'logs.json',
                'method' => 'POST',
                'action' => function () {
                    return \Michnhokn\Logger::logs(
                        $this->requestBody('page', 1),
                        $this->requestBody('limit', 20),
                        $this->requestBody('filter', [])
                    );
                },
            ],
            [
                'pattern' => 'rollback',
                'method' => 'POST',
                'action' => function () {
                    return \Michnhokn\Logger::rollback(
                        $this->requestBody('id'),
                    );
                },
            ]
        ],
    ],
    'areas' => [
        'kirby3-logger' => function () {
            return [
                'label' => t('michnhokn.logger.title'),
                'icon' => 'table',
                'menu' => true,
                'link' => 'logger',
                'views' => [
                    [
                        'pattern' => 'logger',
                        'action' => function () {
                            return [
                                'component' => 'k-logger-area',
                                'title' => t('michnhokn.logger.logs'),
                                'props' => [
                                    'userOptions' => \Michnhokn\Logger::options('user'),
                                    'typeOptions' => \Michnhokn\Logger::options('type'),
                                    'actionOptions' => \Michnhokn\Logger::options('action'),
                                    'languageOptions' => \Michnhokn\Logger::options('language'),
                                ],
                            ];
                        },
                    ],
                ],
            ];
        },
    ],
]);