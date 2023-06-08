import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { IAppState } from "../apps/store";
import AuthPage from "../modules/auth/AuthPage";
import App from "../App";
import PrivatesRoutes from "./PrivatesRoutes";


export const AppRoutes = () => {
    const accessTokenState = useSelector((state:IAppState)=> state.accessTokenState)
    return(
        <BrowserRouter>
          <Routes >
             <Route element={<App />}>
                {
                   !accessTokenState?.valid && (
                    <>
                       <Route path="/*" element={<PrivatesRoutes />} />
                    </>
                    )
                }
                {
                    accessTokenState?.valid && (
                    <>
                        <Route path="auth/*" element={<AuthPage />} />
                        <Route path='*' element={<Navigate to='/auth' />} />
                    </>
                    )
                }
             </Route>
          </Routes>
        </BrowserRouter>
    )
}