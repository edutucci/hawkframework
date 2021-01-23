/* eslint-disable func-names */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import masker from './masker';
import tokens from './tokens';

// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events#The_old-fashioned_way
function event(name) {
  const evt = document.createEvent('Event');
  evt.initEvent(name, true, true);
  return evt;
}

export default function (el, binding) {
  let config = binding.value || '';
  const defaults = {
    masked: true,
    mask: config,
    tokens,
  };
  let oldValue = '';
  if (Array.isArray(config) || typeof config === 'string') {
    config = {
      masked: true,
      mask: config,
      tokens,
    };
  }

  config = { ...defaults, ...config };

  if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
    const els = el.getElementsByTagName('input');
    if (els.length !== 1) {
      throw new Error(`v-mask directive requires 1 input, found ${els.length}`);
    } else {
      el = els[0];
    }
  }

  el.oninput = function (evt) {
    if (!evt.isTrusted) return; // avoid infinite loop
    /* other properties to try to diferentiate InputEvent of Event (custom)
    InputEvent (native)
      cancelable: false
      isTrusted: true

      composed: true
      isComposing: false
      which: 0

    Event (custom)
      cancelable: true
      isTrusted: false
    */
    // by default, keep cursor at same position as before the mask
    let position = el.selectionEnd;
    // save the character just inserted
    const digit = el.value[position - 1];
    el.value = masker(el.value, config.mask, config.masked, config.tokens);
    // if the digit was changed, increment position until find the digit again
    while (position < el.value.length && el.value.charAt(position - 1) !== digit) {
      position += 1;
    }
    if (el === document.activeElement) {
      el.setSelectionRange(position, position);
      setTimeout(() => {
        // account for the caret jumping backwards, see issue #49
        // by substracting Math.sign, we decrement the absolute value by 1
        let lengthDiff = (el.value.length - oldValue.length);
        lengthDiff -= Math.sign(lengthDiff);
        position += lengthDiff;
        el.setSelectionRange(position, position);
        oldValue = el.value;
      }, 0);
    }
    el.dispatchEvent(event('input'));
  };

  const newDisplay = masker(el.value, config.mask, config.masked, config.tokens);
  if (newDisplay !== el.value) {
    el.value = newDisplay;
    el.dispatchEvent(event('input'));
  }
}