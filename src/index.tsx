import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties } from 'react';
import { AppContent } from './components/app';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';
import { ArticleProvider } from './components/article/Article.context'; // добавь импорт

import './styles/index.scss';

// Инициализация корневого элемента для рендеринга React
const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

// Рендеринг корневого компонента в StrictMode с использованием ArticleProvider
root.render(
	<StrictMode>
		<ArticleProvider>
			<AppContent />
		</ArticleProvider>
	</StrictMode>
);

