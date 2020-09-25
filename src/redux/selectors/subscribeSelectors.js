import { plans } from '../../components/SubscriptionsPage/Subscriptions/Subscriptions';

const getTypeSubscription = state => state.user.subscription;
const getPrice = state =>
  plans.find(plan => plan.type === state.user.subscription).price;

export default { getTypeSubscription, getPrice };
