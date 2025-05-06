import React from 'react';
import { Article } from 'components/article';
import { ArticleParamsForm } from 'components/article-params-form';
import { useArticle } from 'components/article/Article.context';

import 'src/styles/index.scss';
import styles from 'src/styles/index.module.scss';


export const App = (): JSX.Element => {
	const { appliedStyles } = useArticle();

	
	const customStyles = {
		'--font-family': appliedStyles.fontFamilyOption.value,
		'--font-size': appliedStyles.fontSizeOption.value,
		'--font-color': appliedStyles.fontColor.value,
		'--container-width': appliedStyles.contentWidth.value,
		'--bg-color': appliedStyles.backgroundColor.value,
	} as React.CSSProperties;

	console.log('Custom styles:', customStyles);

	return (
		<div className={styles.main} style={customStyles}>
			<ArticleParamsForm />
			<main>
				<Article />
			</main>
		</div>
	);
};