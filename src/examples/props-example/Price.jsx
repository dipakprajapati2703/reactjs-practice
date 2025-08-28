import PropTypes from "prop-types";

/**
 * @component Price
 * @param {{ amount: number, currency?: string }} props
 */
export default function Price({ amount, currency = "USD" }) {
  return <strong>{currency} {amount.toFixed(2)}</strong>;
}

Price.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string,
};
