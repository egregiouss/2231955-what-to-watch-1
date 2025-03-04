import {loginAction} from "../../api/api-actions";
import {useRef} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {AuthCredentionals, AuthStatus} from "../../types/auth";
import {Navigate} from "react-router-dom";
import {Header} from "../../components/header/header";
import {Footer} from "../../components/footer/footer";
import {getAuthStatus} from "../../store/auth-process/selectors";

export function SignIn(): JSX.Element{

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const authStatus = useAppSelector(getAuthStatus);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthCredentionals) => {
    dispatch(loginAction(authData));
  };


  return (
    authStatus == AuthStatus.Authorized?
      <Navigate to={'/'}/> :
      <div className="user-page">
        <Header/>
        <div className="sign-in user-page__content">
          <form className="sign-in__form"
                onSubmit={(evt) =>
                {
                  evt.preventDefault();
                  if (emailRef.current !== null && passwordRef.current !== null)
                    onSubmit({
                      email: emailRef.current.value,
                      password: passwordRef.current.value,
                    })
                }
                }
               >
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" type="email" placeholder="Email address" name="user-email"
                  id="user-email" ref={ emailRef }
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" name="user-password"
                  id="user-password" ref={ passwordRef }
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn"
                      type="submit"
              >Sign in</button>
            </div>
          </form>
        </div>

        <Footer/>
      </div>
  );
}
