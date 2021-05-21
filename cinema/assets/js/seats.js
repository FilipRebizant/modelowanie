$(document).ready(function () {
    var seats = {

        row_number: $('#rows_number').val(),
        seats_number: $('#seats_number').val(),
        screening_id: $('#screening_id').val(),
        reserved_seats: [],

        init: function () {
            this.cacheDom();
            this.renderSeats();
            this.bindEvents();
        },

        cacheDom: function () {
            this.$seats__container = $('.seats__container');
            this.$seat = this.$seats__container.find('.seats__seat');
            this.$form = $('#reservation__form');
            this.$btn = this.$form.find('button');
            this.$email = $('#email');
            this.$alert_container = $('.alert');
        },

        bindEvents: function () {
            this.$seats__container.delegate(this.$seat, 'click', this.bookASeat.bind(this));
            this.$btn.click(this.sendData.bind(this));
        },

        renderSeats: function () {

            var row_number = this.row_number,
                seats_number = this.seats_number,
                seats_container = this.$seats__container;


            var url = $('#reservation_url').val();

            $.ajax({
                dataType: 'json',
                url: url,
                type: 'POST'
            }).done(function (data) {
                var currently_booked_seats = data.current_reservations;

                seats_container.html('');

                for (var i = 0; i < row_number; i++) {
                    var row = $('<ul/>', {'class': 'seats__row'});
                    for (var j = 0; j < seats_number; j++) {

                        row.append($('<li/>', {
                            class: 'seats__seat',
                            'data-row': i + 1,
                            'data-seat': j + 1
                        }).append(j + 1));

                        for (var k = 0; k < currently_booked_seats.length; k++) {

                            if (j == (currently_booked_seats[k].seat - 1) && i == currently_booked_seats[k].row - 1) {
                                row[0].children[j].classList.add('seats__seat-booked', 'disabled');
                            }

                        }

                    }
                    seats_container.append(row);
                }

            });

        },

        bookASeat: function (e) {


            var $seat = ($(e.target)),
                row_number = $seat.data('row'),
                seat_number = $seat.data('seat');

            if (e.target.parentNode.parentNode === e.delegateTarget) {

                if (!$seat.hasClass('seats__seat-active')) {
                    $seat.addClass('seats__seat-active');
                    this.reserved_seats.push({
                        'row': row_number,
                        'seat': seat_number
                    });
                } else {

                    $.each(this.reserved_seats, $.proxy(function (index, value) {
                        if (value.row == row_number && value.seat == seat_number) {
                            this.reserved_seats.splice(index, 1);
                            return false;
                        }
                    }, this));

                    $seat.removeClass('seats__seat-active');

                }
            }

        },

        sendData: function (e) {

            e.preventDefault();

            var reserved_seats = this.reserved_seats,
                screening_id = this.screening_id,
                renderSeats = this.renderSeats.bind(this),
                alert_container = this.$alert_container,
                $email = this.$email;

            if (this.validateData()) {

                $.ajax({

                    url: this.$form.attr('action'),
                    data: {
                        seats: reserved_seats,
                        screeningId: screening_id,
                        email: $email.val()
                    },
                    type: 'post'


                }).done(function (data) {

                    alert_container.addClass('alert-success').html(data.info);
                    alert_container.fadeIn().delay(3000).fadeOut();
                    renderSeats();
                    $email.val("");

                }).fail(function (response) {
                    alert_container.addClass('alert-danger').html(response.responseJSON.error);
                    alert_container.fadeIn().delay(3000).fadeOut();
                });
                this.reserved_seats = [];
            }

        },

        validateData: function () {
            var reserved_seats = this.reserved_seats,
                $email = this.$email;

            if (reserved_seats.length == 0) {
                this.checkField('Please choose seats');
                return;
            }

            if (reserved_seats.length > 4) {
                this.checkField('Max number of seets per reservation is 4.');
                return;
            }

            if ($email.val() == "") {
                this.checkField('Please fill email');
                return;
            }

            this.$alert_container.removeClass('alert-danger');

            return true;
        },

        checkField: function (info) {
            this.$alert_container.addClass('alert-danger').html(info);
            this.$alert_container.fadeIn().delay(3000).fadeOut();
        }

    };

    seats.init();


});