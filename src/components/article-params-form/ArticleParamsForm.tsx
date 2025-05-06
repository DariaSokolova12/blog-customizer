import { useState } from 'react';
import { ArrowButton } from 'src/components/arrow-button';
import { Button } from 'src/components/button';
import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleToggle = () => {
		setIsOpen((prev) => !prev);
	};

	const handleReset = () => {
		// Сбросить все значения формы
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Отправить выбранные значения вверх
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleToggle} />
			{isOpen && (
				<aside className={styles.container}>
					<form className={styles.form} onSubmit={handleSubmit} onReset={handleReset}>
						{/* Здесь будут опции формы, например <RadioGroup />, <Select />, ... */}
						<div className={styles.bottomContainer}>
							<Button title='Сбросить' htmlType='reset' type='clear' />
							<Button title='Применить' htmlType='submit' type='apply' />
						</div>
					</form>
				</aside>
			)}
		</>
	);
};

