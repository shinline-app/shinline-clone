import Button from '../../../ui/Button';
import Input from '../../../ui/Input';
import { useEffect, useState } from 'react';
import Textarea from '../../../ui/Textarea';
import store from '../../../store';
import { formatCurrency } from '../../../utils/helpers';
import {
  clearCart,
  getCart,
  getTotalCartPrice,
} from '../../cart/state/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddress } from '../../user/userSlice';
import {
  Form,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
// import { createOrder } from '../../services/apiProducts';
import EmptyCart from '../cart/EmptyCart';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [input, setInput] = useState('');
  const [withPromocode, setWithPromocode] = useState(false);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);

  const isLoadingAddress = addressStatus === 'loading';

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const formErrors = useActionData();

  const totalCartPrice = useSelector(getTotalCartPrice);
  const promoPrice = withPromocode ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + promoPrice;

  useEffect(() => {
    if (!cart.length) return navigate('../cart');
  }, [navigate, cart]);

  return (
    <>
      <div className="xl:flex">
        {/* <Form method="POST" action="/order/new"> */}
        <Form method="POST">
          <div className="basis-2/3">
            <div className="border border-[#E2E9F2] px-6 py-4 sm:px-10 sm:py-7">
              <h2 className="mb-3 font-medium sm:mb-4 sm:text-lg sm:font-bold">
                1. Buyer type and delivery region
              </h2>
              <div className="relative">
                <Input
                  label={'Location'}
                  name="address"
                  disabled={isLoadingAddress}
                  defaultValue={address}
                  type={'text'}
                  onChange={(e) => {}}
                />

                {!position.latitude && !position.longitude && (
                  <span className="absolute bottom-0 right-0 z-50">
                    <Button
                      disabled={isLoadingAddress}
                      type={'success'}
                      onClick={() => dispatch(fetchAddress())}
                    >
                      Get position
                    </Button>
                  </span>
                )}
              </div>
              {addressStatus === 'error' && (
                <p className="-mt-2 p-2 text-sm text-red">{errorAddress}</p>
              )}
            </div>
            <div className="border border-[#E2E9F2] px-6 py-4 sm:px-10 sm:py-7">
              <h2 className="mb-3 font-medium sm:mb-4 sm:text-lg sm:font-bold">
                2. Buyer
              </h2>
              <Input label={'FIO'} type={'text'} onChange={setInput} />
              {formErrors?.fio && (
                <p className="-mt-2 p-2 text-sm text-red">{formErrors?.fio}</p>
              )}
              <Input
                label={'Phone'}
                type={'tel'}
                name={'phone'}
                onChange={setInput}
              />
              {formErrors?.phone && (
                <p className="-mt-2 p-2 text-sm text-red">
                  {formErrors?.phone}
                </p>
              )}
              <Textarea
                label={'Delivery address'}
                type={'text'}
                onChange={setInput}
              />
              <Textarea
                label={'Comments on the order:'}
                type={'text'}
                optional={true}
                onChange={setInput}
              />
              <p className="text-sm text-extragray md:max-w-[80%]">
                Once your order is confirmed, an account will be created and a
                password to enter your personal account will be sent to your
                e-mail
              </p>
            </div>
            <div className="border border-[#E2E9F2] px-6 py-4 sm:px-10 sm:py-7">
              <h2 className="mb-3 font-medium sm:mb-4 sm:text-lg sm:font-bold">
                3. Payment method
              </h2>
              !? todo
            </div>
            <div className="mx-auto my-5 max-w-[458px]">
              <p className="mb-3 text-center text-[13px] sm:mb-5 sm:text-base">
                By clicking on the Place an order button you consent to the{' '}
                <br />
                <b> processing of personal data</b>
              </p>
              <>
                <input type="hidden" name="cart" value={JSON.stringify(cart)} />
                <input
                  type="hidden"
                  name="position"
                  value={
                    position.longitude && position.latitude
                      ? `${position.latitude},${position.longitude}`
                      : ''
                  }
                />
              </>
              <Button
                type={'success'}
                className={'w-full'}
                disabled={isSubmitting || isLoadingAddress}
              >
                {isSubmitting
                  ? 'Placing order....'
                  : `Order now from ${formatCurrency(totalPrice)}`}
              </Button>
            </div>
          </div>
        </Form>
        <div className="basis-1/3">
          <div className="border border-[#E2E9F2] bg-lightgray px-6 py-4 sm:px-10 sm:py-7">
            <h2 className="mb-3 font-medium sm:mb-4 sm:text-lg sm:font-bold">
              Your cart
            </h2>
            <div className="rounded bg-white p-6 text-extragray">
              <div className="relative mb-3 flex justify-between before:absolute before:bottom-[6px] before:w-full before:border before:border-dashed before:border-[#566879] before:opacity-20 before:content-['']">
                <p className="z-[2] bg-white pr-2 ">All products:</p>
                <b className="z-[2] bg-white pl-2 text-black">
                  {cart.length} products
                </b>
              </div>
              <div className="relative mb-3 flex justify-between before:absolute before:bottom-[6px] before:w-full before:border before:border-dashed before:border-[#566879] before:opacity-20 before:content-['']">
                <p className="z-[2] bg-white pr-2 ">Order price:</p>
                <b className="z-[2] bg-white pl-2 text-black">
                  {formatCurrency(totalCartPrice)}
                </b>
              </div>
              <div className="relative mb-7 flex justify-between before:absolute before:bottom-[6px] before:w-full before:border before:border-dashed before:border-[#566879] before:opacity-20 before:content-['']">
                <p className="z-[2] bg-white pr-2 ">Delivery</p>
                <b className="z-[2] bg-white pl-2 text-green">Free</b>
              </div>
              <hr />
              <div className="mt-4 flex justify-between">
                <p className="text-lg font-medium">Total:</p>
                <b className="text-xl text-black">
                  {formatCurrency(totalCartPrice)}
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function action({ request }) {
  console.log(request);
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  console.log(order);

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you.';

  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order and redirect
  // const newOrder = await createOrder(order);

  // Do NOT overuse
  // store.dispatch(clearCart());
  // console.log(newOrder);
  // return redirect(`/order/${newOrder.id}`);
  return redirect(`/cart`);
}

export default CreateOrder;
