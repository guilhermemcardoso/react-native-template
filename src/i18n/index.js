import * as RNLocalize from "react-native-localize";
import I18n from 'i18n-js';
import en from './locales/en-US';
import pt from './locales/pt-BR';

const normalizeTranslate = {
	'en-US': 'en-US',
	'pt-BR': 'pt-BR',
	'en': 'en-US',
	'pt-US': 'pt-BR',
};

const getLanguageByDevice = () => {
	return RNLocalize.getLocales()[0].languageTag;
};

I18n.translations = {
	'en-US': en,
	'pt-BR': pt,
};

const setLanguageToI18n = () => {
	const language = getLanguageByDevice();
	const translateNormalize = normalizeTranslate[language];
	const iHaveThisLanguage = I18n.translations.hasOwnProperty(
		translateNormalize
	);
	iHaveThisLanguage
		? (I18n.locale = translateNormalize)
		: (I18n.defaultLocale = 'en_US');
};

setLanguageToI18n();

export const translate = (key) => I18n.t(key);