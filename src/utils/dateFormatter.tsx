/**
 * Utilitário para formatação de datas com suporte a múltiplos formatos e localização
 */

// Tipos de formatos suportados
export type DateFormat =
  | 'full-date'    // "15 de janeiro de 2024"
  | 'short-date'   // "15/01/2024"
  | 'time'         // "14:30"
  | 'year-month'   // "2024-01"
  | 'month-year'   // "01/2024"
  | 'iso';         // "2024-01-15"

export const dateFormatter = {
  /**
   * Formata uma data string/Date para o formato especificado
   * @param date - Data em string, timestamp ou objeto Date
   * @param format - Formato desejado (padrão: 'short-date')
   * @param locale - Localização (padrão: 'pt-BR')
   */
  format: (
    date: string | Date | number,
    format: DateFormat = 'short-date',
    locale: string = 'pt-BR'
  ): string => {
    const parsedDate = new Date(date);

    if (isNaN(parsedDate.getTime())) {
      return 'Data inválida';
    }

    const options: Intl.DateTimeFormatOptions = {};

    switch (format) {
      case 'full-date':
        options.day = 'numeric';
        options.month = 'long';
        options.year = 'numeric';
        break;

      case 'short-date':
        options.day = '2-digit';
        options.month = '2-digit';
        options.year = 'numeric';
        break;

      case 'time':
        options.hour = '2-digit';
        options.minute = '2-digit';
        break;

      case 'year-month':
        options.year = 'numeric';
        options.month = '2-digit';
        break;

      case 'month-year':
        options.year = 'numeric';
        options.month = '2-digit';
        break;

      case 'iso':
        return parsedDate.toISOString().split('T')[0];
    }

    return parsedDate.toLocaleDateString(locale, options);
  },

  /**
   * Calcula a diferença entre duas datas em anos/meses/dias
   */
  diff: (
    startDate: string | Date,
    endDate: string | Date = new Date()
  ): { years: number; months: number; days: number } => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months--;
      days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  },

  /**
   * Valida se uma string é uma data válida
   */
  isValid: (dateString: string): boolean => {
    return !isNaN(Date.parse(dateString));
  }
};

// Exemplos de uso:
// console.log(dateFormatter.format('2024-01-15', 'full-date')); // "15 de janeiro de 2024"
// console.log(dateFormatter.diff('2020-01-01')); // { years: 4, months: 0, days: 14 }