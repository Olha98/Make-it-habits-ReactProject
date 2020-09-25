import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Card from '../../Card/Card';
import ChoiceType from './ChoiceType';
import { errorActions } from '../../../redux/actions';
import { cardsSelectors, errorSelector } from '../../../redux/selectors';
import style from './Subscriptions.module.css';

export const plans = [
  { type: 'Free', price: 0 },
  { type: 'Noob', price: 4.99 },
  { type: 'Basic', price: 4.8 },
  { type: 'Standart', price: 14.2 },
  { type: 'Premium', price: 27.84 },
  { type: 'Ultra', price: 53.89 },
];

function Subscriptions(props) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);

  useEffect(() => {
    props.payments.length !== 0 && !isCanceled && setIsPaid(true);
    isCanceled && setIsPaid(false);
  }, [props.payments, isCanceled]);

  const dispatch = useDispatch();
  const close = () => {
    setIsShowModal(prev => !prev);
    props.error && dispatch(errorActions.hideError());
  };
  return (
    <div className={style.subscriptionsContainer}>
      <section className={style.subscriptionsSectionTypes}>
        <p className={style.subscriptionsSectionTitle}>Тип подписки</p>
        <ul className={style.subscriptionsList}>
          <li className={style.subscriptionsItem}>
            <p className={style.subscriptionsItemTitleNoob}>Noob</p>
            <p className={style.subscriptionsItemDescription}>
              30 дней —{' '}
              <span className={style.subscriptionsItemDescriptionPrice}>
                $4.99
              </span>
            </p>
          </li>
          <li className={style.subscriptionsItem}>
            <p className={style.subscriptionsItemTitleBasic}>Basic</p>
            <p className={style.subscriptionsItemDescription}>
              1 месяц —{' '}
              <span className={style.subscriptionsItemDescriptionPrice}>
                $4.80
              </span>{' '}
              <span className={style.subscriptionsItemDescriptionDiscount}>
                - 3%
              </span>
            </p>
          </li>
          <li className={style.subscriptionsItem}>
            <p className={style.subscriptionsItemTitleStandart}>Standart</p>
            <p className={style.subscriptionsItemDescription}>
              3 месяца —{' '}
              <span className={style.subscriptionsItemDescriptionPrice}>
                $14.20{' '}
              </span>
              <span className={style.subscriptionsItemDescriptionDiscount}>
                - 5%
              </span>
            </p>
          </li>
          <li className={style.subscriptionsItem}>
            <p className={style.subscriptionsItemTitlePremium}>Premium</p>
            <p className={style.subscriptionsItemDescription}>
              6 месяцев —{' '}
              <span className={style.subscriptionsItemDescriptionPrice}>
                $27.84{' '}
              </span>
              <span className={style.subscriptionsItemDescriptionDiscount}>
                - 7%
              </span>
            </p>
          </li>
          <li className={style.subscriptionsItem}>
            <p className={style.subscriptionsItemTitleUltra}>Ultra</p>
            <p className={style.subscriptionsItemDescription}>
              12 месяцев —{' '}
              <span className={style.subscriptionsItemDescriptionPrice}>
                $53.89{' '}
              </span>
              <span className={style.subscriptionsItemDescriptionDiscount}>
                - 10%
              </span>
            </p>
          </li>
        </ul>
        {!isPaid ? (
          <button
            className="btnTransparentWhiteBorder"
            onClick={() => setIsShowModal(prev => !prev)}
          >
            Изменить подписку
          </button>
        ) : (
          <button
            className={style.button}
            onClick={() => setIsCanceled(prev => !prev)}
          >
            Отменить подписку
          </button>
        )}
        {isShowModal && <ChoiceType close={close} />}
      </section>
      <section className={style.subscriptionsSectionCards}>
        <Card />
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  payments: cardsSelectors.getPayments(state),
  error: errorSelector.getError(state),
});

export default connect(mapStateToProps)(Subscriptions);
