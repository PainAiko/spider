import {useContext} from 'react'
import { I18nContext } from '../i18n/core/TranslateProvider'
export const useLang = () =>  useContext(I18nContext)