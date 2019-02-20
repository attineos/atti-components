/* eslint-env browser */

class Cookies {
  static getItem(sKey) {
    if (!sKey) {
      return null
    }
    return (
      decodeURIComponent(
        document.cookie.replace(
          new RegExp(
            `(?:(?:^|.*;)\\s*${encodeURIComponent(sKey).replace(
              /[\-\.\+\*]/g,
              '\\$&',
            )}\\s*\\=\\s*([^;]*).*$)|^.*$`,
          ),
          '$1',
        ),
      ) || null
    )
  }

  static setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
      return false
    }
    let sExpires = ''
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires =
            vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : `; max-age=${vEnd}`
          /*
           Note: Despite officially defined in RFC 6265, the use of `max-age` is not compatible with any
           version of Internet Explorer, Edge and some mobile browsers. Therefore passing a number to
           the end parameter might not work as expected. A possible solution might be to convert the the
           relative time to an absolute time. For instance, replacing the previous line with:
           */
          /*
           sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; expires=" + (new Date(vEnd * 1e3 + Date.now())).toUTCString();
           */
          break
        case String:
          sExpires = `; expires=${vEnd}`
          break
        case Date:
          sExpires = `; expires=${vEnd.toUTCString()}`
          break
      }
    }
    document.cookie = `${encodeURIComponent(sKey)}=${encodeURIComponent(sValue)}${sExpires}${
      sDomain ? `; domain=${sDomain}` : ''
    }${sPath ? `; path=${sPath}` : ''}${bSecure ? '; secure' : ''}`
    return true
  }

  static removeItem(sKey, sPath, sDomain) {
    if (!this.hasItem(sKey)) {
      return false
    }
    document.cookie = `${encodeURIComponent(sKey)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT${
      sDomain ? `; domain=${sDomain}` : ''
    }${sPath ? `; path=${sPath}` : ''}`
    return true
  }

  static hasItem(sKey) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
      return false
    }
    return new RegExp(
      `(?:^|;\\s*)${encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&')}\\s*\\=`,
    ).test(document.cookie)
  }
}
export default Cookies