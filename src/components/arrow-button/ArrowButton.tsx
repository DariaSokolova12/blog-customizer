import clsx from 'clsx';
import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

export type OnClick = () => void;

export type ArrowButtonProps = {
	onClick: OnClick;
	state: boolean;
};

/**
 * Кнопка со стрелкой для открытия/закрытия панели
 */
export const ArrowButton = ({ onClick, state }: ArrowButtonProps): JSX.Element => {
	const containerClass = clsx(styles.container, {
		[styles.container_open]: state,
	});

	const arrowClass = clsx(styles.arrow, {
		[styles.arrow_open]: state,
	});

	const ButtonWrapper = () => (
		<div
			onClick={onClick}
			role='button'
			aria-label='Открыть или закрыть панель'
			tabIndex={0}
			className={containerClass}
		>
			<img src={arrow} alt='Иконка стрелки' className={arrowClass} />
		</div>
	);

	return <ButtonWrapper />;
};
