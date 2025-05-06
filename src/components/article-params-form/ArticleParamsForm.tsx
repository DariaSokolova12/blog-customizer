import React, { useRef } from 'react';
import clsx from 'clsx';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Select } from 'components/select';
import { RadioGroup } from 'components/radio-group';
import { Separator } from 'components/separator';
import { useClose } from 'components/select/hooks/useOutsideClickClose';

import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { useArticle } from 'components/article/Article.context';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = (): JSX.Element => {
	const {
		stylesSelected,
		setStylesSelected,
		applyStyles,
		resetStyles,
	} = useArticle();

	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	const handleOnChange =
		(field: keyof typeof stylesSelected) => (value: OptionType) => {
			setStylesSelected({ ...stylesSelected, [field]: value });
		};

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		applyStyles();
	};

	useClose({
		isOpen: isMenuOpen,
		onClose: () => setIsMenuOpen(false),
		rootRef: ref,
	});

	return (
		<>
			<ArrowButton
				onClick={() => setIsMenuOpen((prev) => !prev)}
				state={isMenuOpen}
			/>
			<aside
				ref={ref}
				className={clsx(styles.container, {
					[styles.container_open]: isMenuOpen,
				})}
			>
				<form className={styles.form} onSubmit={handleFormSubmit}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>

					<Select
						title='шрифт'
						placeholder='Open Sans'
						selected={stylesSelected.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={handleOnChange('fontFamilyOption')}
					/>

					<RadioGroup
						title='размер шрифта'
						name='fontSize'
						selected={stylesSelected.fontSizeOption}
						options={fontSizeOptions}
						onChange={handleOnChange('fontSizeOption')}
					/>

					<Select
						title='цвет шрифта'
						placeholder='Черный'
						selected={stylesSelected.fontColor}
						options={fontColors}
						onChange={handleOnChange('fontColor')}
					/>

					<Separator />

					<Select
						title='цвет фона'
						placeholder='Белый'
						selected={stylesSelected.backgroundColor}
						options={backgroundColors}
						onChange={handleOnChange('backgroundColor')}
					/>

					<Select
						title='ширина контента'
						placeholder='Широкий'
						selected={stylesSelected.contentWidth}
						options={contentWidthArr}
						onChange={handleOnChange('contentWidth')}
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={resetStyles} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};

