import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ko from 'date-fns/locale/ko';

export const getDistanceToNow = (date: Date | string) => {
  let d: Date;
  if (typeof date === 'string') {
    d = new Date(date);
  } else {
    d = date;
  }
  const now = Date.now();
  const diff = now - d.getTime();

  if (diff < 1000 * 60 * 5) {
    return '방금 전';
  }

  // 1달 전 까지 formatDistanceToNow 사용
  if (diff < 1000 * 60 * 60 * 24 * 30) {
    return formatDistanceToNow(d, {
      locale: ko,
      addSuffix: true,
    });
  }

  return d.toLocaleDateString();
};
